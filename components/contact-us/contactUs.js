import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactPage } from "../../store/slices/contact/contactSlice";
import { PageHeading_section } from "../tools/sections/pageHeading_section";
import { ContactInfo_section } from "./sections/contactInfo_section";
import { LeaveMassage_section } from "./sections/leaveMassage_section";
import style from "./style/contactUs.module.scss";

export const ContactUsComponent = () => {
  const { contact } = useSelector(({ contact }) => contact);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactPage());
  }, []);

  console.log(contact);

  return (
    <div className={style.contactUs}>
      <PageHeading_section data={contact.cover_section} />
      <ContactInfo_section />
      <LeaveMassage_section />
    </div>
  );
};
