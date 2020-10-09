import React from 'react'
import macain from "../../assets/images/food1.jpg";
import Cerelac from "../../assets/images/food2.jpg";
import FunFood from "../../assets/images/food3.jpg";
import { Row, Col, Card, Form, Button ,Table} from "react-bootstrap";
import ButtonG from "./ButtonG";


export default function TableI(props) {
    return (
                 <Card>
            <Card.Header>
              <Card.Title as="h5">{props.TableName}</Card.Title>
            </Card.Header>
            <br />
            <Row>
            <Col md={6}>
            <Form inline>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Search" className="mb-1 mx-2"/>
                    <ButtonG Button1="Search"
                    Button2="Cancel" />
                  </Form.Group>
                </Form>
                </Col>
            
               
            
                </Row>
           
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Shop Name</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Fun Food veg Mayonnaise</td>
                    <td>
                      <img className="shopBannerImage" src={FunFood} />
                    </td>
                    <td>Active</td>
                    <td>
                      <div class="toggle-switch blue">
                        <input
                          type="checkbox"
                          id="toggle1"
                          data-toggle="toggle"
                         
                          class="button"
                        />
                        <label for="toggle1" class="border">
                          toggle button
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Cerelac Wheat Apple</td>
                    <td>
                      <img src={Cerelac} className="shopBannerImage" />
                    </td>
                    <td>Active</td>
                    <td>
                      <div class="toggle-switch blue">
                        <input
                          type="checkbox"
                          id="toggle2"
                     
                          class="button"
                        />
                        <label for="toggle2" class="border">
                          toggle button
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Macain French fries</td>
                    <td>
                      <img src={macain} className="shopBannerImage" />
                    </td>
                    <td>Active</td>
                    <td>
                      <div class="toggle-switch blue">
                        <input
                          type="checkbox"
                        
                          id="toggle3"
                          class="button"
                        />
                        <label for="toggle3" class="border">
                          ON
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
            </Card>
       
    )
}
