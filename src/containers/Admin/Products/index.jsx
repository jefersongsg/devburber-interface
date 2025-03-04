
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { api } from '../../../services/api';
import { useEffect, useState } from 'react';
import { Container, ProductImg, Editbutton } from './styles';
import { PencilLine } from '@phosphor-icons/react/dist/ssr';
import { formatPrice } from '../../../utils/formatPrice.js'
import { CheckCircle, XCircle } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export function Products() {
    const [ products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');

            setProducts(data);
        }
        loadProducts();
    },[]);

    function isOffer(offer) {
      if (offer) {
        return <CheckCircle color='#0cf80c' size={32}/>
      }else{
        return<XCircle color='#eb0000' size={32}/>
      }
    }
    function editProduct(product) {
      navigate('/admin/editar-produto',{state:{ product }});
    }

    return(
        <Container>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">Preço</TableCell>
            <TableCell align="center">Produtos em oferta</TableCell>
            <TableCell align="center">Image do produto</TableCell>
            <TableCell align="center">Editar produto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="center">{formatPrice(product.price)}</TableCell>
              <TableCell align="center">{isOffer(product.offer)}</TableCell>
              <TableCell align="center"><ProductImg src={product.url}/></TableCell>
              <TableCell align="center">
                <Editbutton onClick={()=> editProduct(product)}>
                    <PencilLine/>
                </Editbutton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
        </Container>
    );
}