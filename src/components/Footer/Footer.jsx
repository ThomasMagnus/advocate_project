import React from "react";
import './footer.scss'

class Footer extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <footer className="footer">
                {this.props.children}
            </footer>
        )
    }
}

export default Footer
