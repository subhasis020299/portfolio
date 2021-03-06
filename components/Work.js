import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import workData from "../data/work";

const Work = () => {
	return (
		<div className={`${styles.workContainer}`}>
			<h2 className="text-center my-4">
				<u>WORK</u>
			</h2>
			<p style={{ fontSize: "1.2rem", textAlign: "center" }}>
				Here's a brief history of my work experience...
			</p>
			<Row>
				{workData.map((item, index) => (
					<Col sm={12} md={6} lg={4} key={index}>
						<Card className={styles.workCard}>
							<Card.Img
								variant="top"
								src={item.logo}
								className={styles.workCardImg}
							/>
							<Card.Body>
								<Card.Title>
									<a href={item.url}>
										<h4>{item.company}</h4>
									</a>
									<span style={{ color: "#ffcb37" }}>{item.position}</span>
									<br />
									<small>({item.duration})</small>
								</Card.Title>
								<Card.Text>{item.description}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Work;
