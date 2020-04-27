import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';

class ClassList extends React.Component{

    render(){
        return(
            <div className="classlist">
                <div className="ext_navbar">
                    <Link to="/"><img alt="PCI Logo" src={require('../assets/AR_Logo_Final.png')} /></Link>
                </div>
                Here are some of the most relevant courses I took during my enrollment at the University of Maryland.
                <div className="classlist-body">
                    <Collapsible trigger="INST490 - Integrated Capstone for Information Science">
                        <p> The capstone provides a platform for Information Science students where they can apply a subset of the concepts, methods, and tools they learn as part of the Information Science program to addressing an information problem or fulfilling an information need. </p>
                    </Collapsible>
                    <Collapsible trigger="INST462 - Introduction to Data Visualization">
                        <p> Exploration of the theories, methods, and techniques of visualization of information, including the effects of human perception, the aesthetics of information design, the mechanics of visual display, and the semiotics of iconography. </p>
                    </Collapsible>
                    <Collapsible trigger="INST447 - Data Sources and Manipulation">
                        <p> Examines approaches to locating, acquiring, manipulating, and disseminating data. Imperfection, biases, and other problems in data are examined, and methods for identifying and correcting such problems are introduced. The course covers other topics such as automated collection of large data sets, and extracting, transforming, and reformatting a variety of data and file types. </p>
                    </Collapsible>
                    <Collapsible trigger="INST443 - Tools and Methods for Digital Curation">
                        <p> Introduces students to the application of digital tools and methods in a variety of organizational settings, academic disciplines, and economic sectors. Hands-on experience with digital curation tools is an integral part of the course, and will be provided in the Digital Curation Innovation Center (DCIC). </p>
                    </Collapsible>
                    <Collapsible trigger="INST414 - Data Science Techniques">
                        <p> An exploration of how to extract insights from large-scale datasets. The course will cover the complete analytical funnel from data extraction and cleaning to data analysis and insights interpretation and visualization. The data analysis component will focus on techniques in both supervised and unsupervised learning to extract information from datasets. Topics will include clustering, classification, and regression techniques. Through homework assignments, a project, exams and in-class activities, students will practice working with these techniques and tools to extract relevant information from structured and unstructured data. </p>
                    </Collapsible>
                    <Collapsible trigger="INST377 - Dynamic Web Applications">
                        <p> An exploration of the basic methods and tools for developing dynamic, database-driven websites, including acquiring, installing, and running web servers, database servers, and connectability applications. </p>
                    </Collapsible>
                    <Collapsible trigger="INST362 - User-Centered Design">
                        <p> Introduction to human-computer interaction (HCI), with a focus on how HCI connects psychology, information systems, computer science, and human factors. User-centered design and user interface implementation methods discussed include identifying user needs, understanding user behaviors, envisioning interfaces, and utilizing prototyping tools, with an emphasis on incorporating people in the design process from initial field observations to summative usability testing. </p>
                    </Collapsible>
                    <Collapsible trigger="INST354 - Decision-Making for Information Science">
                        <p> Examines the use of information in organizational and individual decision-making, including the roles of information professionals and information systems in informed decision-making through techniques such as data analysis and regression, optimization, sensitivity analysis, decision trees, risk analysis and business simulation models. </p>
                    </Collapsible>
                    <Collapsible trigger="INST352 - Information User Needs and Assessment">
                        <p> Focuses on use of information by individuals, including the theories, concepts, and principles of information, information behavior and mental models. Methods for determining information behavior and user needs, including accessibility issues will be examined and strategies for using information technology to support individual users and their specific needs will be explored. </p>
                    </Collapsible>
                    <Collapsible trigger="INST346 - Technologies, Infrastructure and Architecture">
                        <p> Examines the basic concepts of computer hardware, systems software, networking, client/server architectures, cloud computing, distributed systems, and high performance computing as applied to information rich domains. Technology and architectures will be discussed within the contexts of solving social issues, supportingscience, and conducting business operations. Current computing topics such as web environments, IoT, security, management, and policy will also be reviewed. </p>
                    </Collapsible>
                    <Collapsible trigger="INST341 - Introduction to Digital Curation">
                        <p> Explores various dimensions and contexts for digital curation, which includes all activities involving the management, representation and preservation of both born-digital and digitized information. Focuses on opportunities, challenges and demands of every-increasing digital data and networked information infrastructure. </p>
                    </Collapsible>
                    <Collapsible trigger="INST335 - Organizations, Management and Teamwork">
                        <p> Examines principles, methods and types of leadership with an emphasis on goal setting, motivation, problem solving, and conflict resolution. Examines principles of developing teams and managing team projects through planning and execution, including estimating costs, managing risks, scheduling, staff and resource allocation, communication, tracking, and control. Trains students to recognize and capitalize on opportunities to use information to increase efficiency, improve performance, and support innovation within teams and organizations. Focuses on strategic use of emerging technologies and new information resources to execute information-enabled change. </p>
                    </Collapsible>
                    <Collapsible trigger="INST327 - Database Design and Modeling">
                        <p> Introduction to databases, the relational model, entity-relationship diagrams, user-oriented database design and normalization, and Structured Query Language (SQL). Through labs, tests, and a project, students develop both theoretical and practical knowledge of relational database systems. </p>
                    </Collapsible>
                    <Collapsible trigger="INST314 - Statistics for Information Science">
                        <p> Basic concepts in statistics including measure construction, data exploration, hypothesis development, hypothesis testing, pattern identification, and statistical analysis. The course also provides an overview of commonly used data manipulation and analytic tools. Through homework assignments, projects, and in-class activities, you will practice working with these techniques and tools to create information resources that can be used in individual and organizational decision-making and problem-solving. </p>
                    </Collapsible>
                    <Collapsible trigger="INST311 - Information Organization">
                        <p> Examines the theories, concepts, and principles of information, information representation and organization, record structures, description, and classification. Topics to be covered in this course include the methods and strategies to develop systems for storage, organization, and retrieval of information in a variety of organizational and institutional settings, as well as policy, ethical, and social implications of these systems. </p>
                    </Collapsible>
                </div>
            </div>
        )
    }
}
export default ClassList;