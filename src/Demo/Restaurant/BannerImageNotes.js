import React from 'react';
import { Card } from 'react-bootstrap';

export default function BannerImageNotes() {
	return (
		<>
			<Card>
				<Card.Header className="bg-danger h3 text-white text-center">## Image Note##</Card.Header>
				<Card.Body>
					<Card.Title>For Banner</Card.Title>
					<Card.Text>
						Image dimension (width*height) <b>900*370</b>
					</Card.Text>
				</Card.Body>
				<Card.Body>
					<Card.Title>For Discount</Card.Title>
					<Card.Text>
						Image dimension (width*height) <b>310*160</b>
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}
