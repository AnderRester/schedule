import React from "react";
import { Card, CardHeader, CardBody, CardImg, ListGroup, ListGroupItem } from "react-bootstrap";
import { ScrollView, StyleSheet } from "react-native";

const Schedule = () => {
    return (
        <ScrollView
            horizontal
            contentContainerStyle={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ACB5BD",
            }}
        >
            <Card style={styles.schedule_card}>
                <CardHeader style={styles.schedule_item}>Рабочий День</CardHeader>
                {/* <CardImg
                    src="http://imageipsum.com/400x100"
                    alt="Random Image"
                    variant="top"
                    style={styles.schedule_card_img}
                /> */}
                <CardBody>
                    <Card.Title>Четверг</Card.Title>
                    <Card.Text>28 Декабря</Card.Text>
                </CardBody>
                <ListGroup>
                    <ListGroupItem style={styles.schedule_item}>08:00 - 17:00</ListGroupItem>
                    <ListGroupItem
                        style={{
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                            backgroundColor: "#252A2E",
                            borderColor: "#45494D",
                            borderWidth: 5,
                            padding: 5,
                            color: "#ACB5BD",
                            width: "100%",
                        }}
                    >
                        До Выходного 1 День
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    schedule_container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ACB5BD",
    },
    schedule_card: {
        width: 400,
        backgroundColor: "#212529",
        borderRadius: 9,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    schedule_card_img: {
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
    },
    schedule_card_text: {
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: 500,
        color: "#ACB5BD",
    },
    schedule_item: {
        backgroundColor: "#252A2E",
        borderColor: "#45494D",
        borderWidth: 9,
        padding: 5,
    },
});

export default Schedule;
