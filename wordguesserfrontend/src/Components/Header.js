import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'




function showSettings() {

}
function Header() {

    return <div class="d-flex justify-content-center">
        <div class="row">
            <div class="col-sm">
                <Button class="btn btn-primary" >About</Button>
            </div>
            <div class="col-sm">
                WordGuesser
            </div>
            <div class="col-sm">
                <Button onClick={showSettings}>Settings</Button>
            </div>
        </div>



    </div>;
}

export default Header;
