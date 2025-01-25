import React from 'react'
import NavBar from './NavBar'

const ViewAllVistors = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Purpose</th>
                                    <th scope="col">Whomm to meet</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>Arun</td>
                                    <td>R</td>
                                    <td>Official</td>
                                    <td>HOD</td>
                                    <td>Sep 15 2024</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAllVistors