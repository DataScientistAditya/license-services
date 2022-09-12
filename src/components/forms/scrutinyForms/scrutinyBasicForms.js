import React,{useState} from "react";
<<<<<<< HEAD
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import {AiFillCheckCircle, AiFillCloseCircle} from "react-icons/ai";
=======
import Personalinfo from "./Personalinfo/Personalinfo";
import Genarelinfo from "./Generalinfo/Generalinfo";
import Developerinfo from "./Developerinfo/Developerinfo";
import AppliedLandinfo from "./AppliedLand/AppliedLand";

>>>>>>> 6679b4a (departmental login)
const ScrutitnyForms=()=>{
    const [displayPersonal,setDisplayPersonalInfo] = useState("none");
    const [displayPurpose,setDisplayPurposeInfo] = useState("none");
    const [displayGeneral,setDisplayGeneralInfo] = useState("none");

    const [uncheckedValue,setUncheckedVlue]=useState([]);

    console.log(uncheckedValue);
    return(
<<<<<<< HEAD
       <Form>
            <div className="justify-content-center" 
                onClick={()=>(displayPersonal==="none")?setDisplayPersonalInfo("block"):setDisplayPersonalInfo("none")} 
                style={{
                    width:"100%", 
                    height:40,
                    backgroundColor:"aliceblue",
                    padding:5,
                    borderColor:"darkblue", 
                    borderWidth:2, 
                    borderBlockStyle:"solid", 
                    borderRadius:5,
                    marginBottom:10
                }}>
                <h2 style={{fontSize:20, fontFamily:"Roboto", color:"GrayText"}}>Personal Information</h2>
            </div>
            <Form.Group style={{display:displayPersonal}} className="justify-content-center">
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col className="ms-auto" md={4} xxl lg="3">
                        <div>
                            <Form.Label>Authorized Person Name</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Name_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group1" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Name_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group1" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Authorized Mobile No</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Mobile_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group2" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Mobile_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group2" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Authorized Mobile No. 2</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Mobile2_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group3" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Mobile2_false"type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group3" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Authorized Email ID</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Email_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group4" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Email_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group4" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>PAN No.</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Pan_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group5" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Pan_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group5" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Address 1 </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="P_Address1_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group6" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Address1_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group6" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Address 2</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Address2_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group7" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Address2_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group7" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Pincode</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Pincode_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group8" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Pincode_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group8" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Village/City.</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Village_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group9" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Village_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group9" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Tehsil </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Tehsil_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group10" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Tehsil_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group10" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>District</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_District_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group11" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_District_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group11" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>State</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_State_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group12" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_State_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group12" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
            </Form.Group>

            <div className="justify-content-center" 
                onClick={()=>(displayPurpose==="none")?setDisplayPurposeInfo("block"):setDisplayPurposeInfo("none")} 
                style={{
                    width:"100%", 
                    height:40,
                    backgroundColor:"aliceblue",
                    padding:5,
                    borderColor:"darkblue", 
                    borderWidth:2, 
                    borderBlockStyle:"solid", 
                    borderRadius:5,
                    marginBottom:10
                }}>
                <h2 style={{fontSize:20, fontFamily:"Roboto", color:"GrayText"}}>Purpose Information</h2>
            </div>
            <Form.Group style={{display:displayPurpose}} className="justify-content-center">
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col className="ms-auto" md={4} xxl lg="3">
                        <div>
                            <Form.Label>Purpose:</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Purpose_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group13" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="P_Purpose_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group13" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>District</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Purpose_District_true" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group14" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_District_false" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group14" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Development Plan</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Purpose_Development_Plan_true" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group15" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_Development_Plan_false"
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group15" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Potential Zone</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Purpose_Potential_Zone_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group16" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_Potential_Zone_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group16" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Developer</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Purpose_Developer_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group17" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_Developer_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group17" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Sector</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="P_Purpose_Sector_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group18" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_Sector_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group18" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Tehsil</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Purpose_Tehsil_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group19" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_Tehsil_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group19" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Village</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Purpose_Village_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group20" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_Village_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group20" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
            </Form.Group>

            <div className="justify-content-center" 
                onClick={()=>(displayGeneral==="none")?setDisplayGeneralInfo("block"):setDisplayGeneralInfo("none")} 
                style={{
                    width:"100%", 
                    height:40,
                    backgroundColor:"aliceblue",
                    padding:5,
                    borderColor:"darkblue", 
                    borderWidth:2, 
                    borderBlockStyle:"solid", 
                    borderRadius:5,
                    marginBottom:10
                }}>
                <h2 style={{fontSize:20, fontFamily:"Roboto", color:"GrayText"}}>General Information</h2>
            </div>
            <Form.Group style={{display:displayGeneral}} className="justify-content-center">
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col className="ms-auto" md={4} xxl lg="3">
                        <div>
                            <Form.Label>Name of the land owner:</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Land_Owner_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group21" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="P_Land_Owner_false" 
                            type="radio" id = "default-radio" 
                            label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                            name="group21" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Status(individual/ company/ etc)</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Status_true" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group22" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Status_false" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group22" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>LC-I signed by</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_LC-I_signed_by_true" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group23" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_LC-I_signed_by_false"
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group23" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Nature of authorization</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_nature_of_authorization_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group24" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_nature_of_authorization_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group24" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Land schedule</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Land_schedule_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group25" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Land_schedule_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group25" inline></Form.Check>
                        <Button>View</Button>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Copy of Mutation</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="P_Copy_of_Mutation_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group26" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Copy_of_Mutation_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group26" inline></Form.Check>
                        <Button>View</Button>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Copy of Jamabandi</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Copy_of_Jamabandi_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group27" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Copy_of_Jamabandi_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group27" inline></Form.Check>
                        <Button>View</Button>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Details of lease / patta, if any</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Details_of_lease_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group28" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_Village_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group28" inline></Form.Check>
                        <Button>View</Button>
                    </Col>
                </Row>
            </Form.Group>
       </Form>
    )
}

=======
       <div>
            <Personalinfo></Personalinfo>
            <Genarelinfo></Genarelinfo>
            <Developerinfo></Developerinfo>
            <AppliedLandinfo></AppliedLandinfo>
       </div>
    )
}



>>>>>>> 6679b4a (departmental login)
export default ScrutitnyForms;