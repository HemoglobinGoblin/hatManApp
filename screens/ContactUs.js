import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
import { Button, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import * as MailComposer from 'expo-mail-composer'

const ContactUs = () => {
    const sendMail = () => {
        MailComposer.composeAsync({
            recipients: ['thelostmind@hatman.co'],
            subject: 'Demo',
            body: "I've completed the trial and here is my code: "
        })
    }

    return(
        <ScrollView style={{backgroundColor: 'black'}}>
            <Card containerStyle={styles.card} wrapperStyle={{ margin: 20}}>
                <Card.Title style={{color: 'white'}}>Contact Information</Card.Title>
                <Card.Divider style={{ alignContent: 'center'}}>
                    <Text style={{color: 'white'}}>TheLostMind inc</Text>
                    <Text style={{color: 'white'}}>Paris, TX 75460</Text>
                    <Text style={{color: 'white'}}>U.S.A</Text>
                    <Button 
                        title='Send Mail'
                        buttonStyle={{
                            backgroundColor: '#0000',
                            margin: 40,
                            borderColor: 'white',
                            borderWidth: 1
                        }}
                        Icon={
                            <Icon />
                        }
                        onPress={() => sendMail()}
                    />
                </Card.Divider>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor:'black',
    }
})

export default ContactUs;