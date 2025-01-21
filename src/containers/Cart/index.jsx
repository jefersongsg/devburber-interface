
import Logo from '../../assets/logo.svg'
import { Banner, Container, Content, Title } from './styles';
import { CartItens } from '../../components';


export function Cart() {
    return(
        <Container>
            <Banner>
                <img src={Logo} alt='logo devburger'/>
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItens/>
                {/**<CartItms/> */}
            </Content>
        </Container>
    );
}