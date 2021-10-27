import React from 'react';
import {
    Toast,
    ToastHeader,
    ToastBody,
} from 'reactstrap';

class Dashborad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <div id="DashboradMainContaine">
                <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-3">
                        <div className=" p-3 my-2 rounded">
                            <Toast>
                                <ToastHeader>
                                    hospital 1
                                </ToastHeader>
                                <ToastBody>
                                    hospital 1 infos
                                </ToastBody>
                            </Toast>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <div className=" p-3 my-2 rounded">
                            <Toast>
                                <ToastHeader>
                                    hospital 2
                                </ToastHeader>
                                <ToastBody>
                                hospital 2 infos
                                </ToastBody>
                            </Toast>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <div className=" p-3 my-2 rounded">
                            <Toast>
                                <ToastHeader>
                                    hospital 3
                                </ToastHeader>
                                <ToastBody>
                                hospital 3 infos
                                </ToastBody>
                            </Toast>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <div className=" p-3 my-2 rounded">
                            <Toast>
                                <ToastHeader>
                                    hospital 4
                                </ToastHeader>
                                <ToastBody>
                                hospital 4 infos
                                </ToastBody>
                            </Toast>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <div className=" p-3 my-2 rounded">
                            <Toast>
                                <ToastHeader>
                                    hospital 5
                                </ToastHeader>
                                <ToastBody>
                                hospital 5 infos
                                </ToastBody>
                                <ToastBody>
                                hospital 5 tralala
                                </ToastBody>
                                <ToastBody>
                                hospital 5 perfect
                                </ToastBody>
                            </Toast>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashborad;
