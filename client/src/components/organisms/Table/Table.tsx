import { useState, useEffect } from 'react';
import {
  StyledTableWrapper,
  StyledTableTitles,
  StyledTableItem,
  StyledHeadline,
  StyledPagenation,
  StyledFlex,
  StyledTable,
  StyledButtonDiv,
} from './styles';

import { IProduct } from '../../../shared/api/types';
import { useQuery } from '@tanstack/react-query';
import { API } from '../../../shared/api';
import FullScreenLoader from '../../atoms/FullScreenLoader';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { COLOR } from '../../../shared/theme/types';
import UserForma from '../../atoms/UserForma';
import UserUpdate from '../../molecules/UserUpdate/UserUpdate';
import UserDeletion from '../../molecules/UserDeletion/UserDeletion';

const Table = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: () => API.getProducts(),
  });

  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [tableData, setTableData] = useState<IProduct[]>([]);

  useEffect(() => {
    if (data) {
      setTableData(data);
    }
  }, [data]);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (isError) {
    return <p>Kažkas ne taip, pabandykite vėliau...</p>;
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setCurrentPage(1);
  };

  const filteredProductsList = tableData
    ? tableData
        .filter((product: IProduct) => {
          const lowerCaseSearchValue = searchValue.toLowerCase();
          return (
            product.name.toLowerCase().includes(lowerCaseSearchValue) ||
            product.surname.toLowerCase().includes(lowerCaseSearchValue) ||
            product.email.toLowerCase().includes(lowerCaseSearchValue) ||
            product.date.toLowerCase().includes(lowerCaseSearchValue)
          );
        })
        .map((product: IProduct) => ({
          id: product._id?.toString() as string,
          name: product.name,
          surname: product.surname,
          email: product.email,
          date: product.date,
        }))
    : [];

  const displayedProductsList = filteredProductsList.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  const getUserProperties = () => {
    const properties = ['VARDAS', 'PAVARDĖ', 'EL. PAŠTAS', 'GIMIMO DATA'];
    return properties;
  };

  const userProperties = getUserProperties();

  const handleAddUserClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const totalPages = Math.ceil(filteredProductsList.length / 10);

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickPage = (page: number) => {
    setCurrentPage(page);
  };

  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    for (let page = startPage; page <= endPage; page++) {
      visiblePages.push(page);
    }

    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <StyledTableWrapper>
      <StyledHeadline>
        Vartotojų sąrašas
        <StyledFlex>
          <Input
            type='text'
            placeholder='Vartotojo paieška'
            value={searchValue}
            onChange={handleSearchChange}
          />
          <Button
            text='Pridėti vartotoją'
            color={COLOR.primary}
            action={() => handleAddUserClick()}
          />
        </StyledFlex>
        <UserForma
          showForm={showForm}
          closeForm={handleFormClose}
          refetchUsers={refetch}
        />
      </StyledHeadline>
      <StyledTable>
        <StyledTableTitles>
          {userProperties.map((property) => (
            <h3 key={property}>{property}</h3>
          ))}
        </StyledTableTitles>

        {displayedProductsList.map((product) => (
          <StyledTableItem key={product.id}>
            <p>{product.name}</p>
            <p>{product.surname}</p>
            <p>{product.email}</p>
            <p>{product.date}</p>
            <StyledButtonDiv>
              <UserUpdate
                _id={product.id}
                product={product}
                refetchUsers={refetch}
              />
              <UserDeletion _id={product.id} refetchUsers={refetch} />
            </StyledButtonDiv>
          </StyledTableItem>
        ))}
      </StyledTable>
      <StyledPagenation>
        <Button
          text='<'
          action={handleClickPrevious}
          disabled={currentPage === 1}
        />
        {visiblePages.map((page) => (
          <Button
            key={page}
            text={page.toString()}
            color={page === currentPage ? COLOR.primary : undefined}
            action={() => handleClickPage(page)}
            disabled={page === currentPage}
          />
        ))}
        <Button
          text='>'
          action={handleClickNext}
          disabled={currentPage === totalPages}
        />
      </StyledPagenation>
    </StyledTableWrapper>
  );
};

export default Table;
