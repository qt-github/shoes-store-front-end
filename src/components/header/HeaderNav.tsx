import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


function HeaderNav() {
    return (
        <Navbar className="contrainer bg-body-tertiary justify-content-end">
            <Form >
                <Row>
                    <Col xs="auto">
                        <button type={"button"} className={"search"}><SearchIcon/></button>
                        <button type={"button"} className={"notifications"}><NotificationsIcon/></button>
                    </Col>
                    <Col xs="auto">
                        <button className={"btnAdmin"} type="button">ADMIN<ExpandMoreOutlinedIcon/></button>
                    </Col>
                </Row>
            </Form>
        </Navbar>
    );
}

export default HeaderNav;