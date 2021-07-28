import React from 'react';
import './styles/footer.css';

class Footer extends React.Component {
    render() {
        return (

            <footer className="footer border-top border-5">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="mt-3 text-center col-md-12 col-lg-3">
                            <p>Términos y condiciones</p>
                        </div>

                        <div className="mt-3 text-center col-md-12 col-lg-3">
                            <p>©2021 Virtual Dreams</p>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }

}

export default Footer;