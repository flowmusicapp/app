import React, { useEffect, useState } from "react";
import { PermissionsAndroid, Platform, Text, View } from "react-native";
import Contacts from "react-native-contacts";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import PeopleCard from "../../components/profile/PeopleCard";
import { getAllContacts } from "../../store/actions/Contacts";
import common from "../../styles/common";
import _ from "lodash";

const People = () => {
  const [phoneContacts, setContacts] = useState([]);
  const stateData = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Platform.OS === "ios") {
      Contacts.getAll((err, contacts: any) => {
        if (err) {
          // throw err;
        }
        setContacts(contacts);
        dispatch(getAllContacts(contacts));
      });
    } else if (Platform.OS === "android") {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: "Access Your Contacts",
        message: "This app would like to view your contacts.",
        buttonPositive: "Allow",
        buttonNegative: "Deny",
      }).then(() => {
        Contacts.getAll((err, contacts: any) => {
          if (err === "denied") {
          } else {
            setContacts(contacts);
            console.log("phoneContacts", contacts);
          }
        });
      });
    }
  }, [Contacts]);

  return (
    <View style={[common.PageLayout]}>
      <Header name="People" />
      <View style={[common.PagePadding]}>
        <Text style={[common.PageTitle, { marginBottom: 10, marginTop: 10 }]}>
          Contacts from your phone
        </Text>
        {phoneContacts.length > 0 &&
          _.sortBy(phoneContacts, ["givenName"]).map((phone: any) => {
            return <PeopleCard payload={phone} />;
          })}
      </View>
    </View>
  );
};

export default People;
