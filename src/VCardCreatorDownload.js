import { useEffect } from "react";
import VCard from "vcard-creator";

function VCardCreatorDownload() {
  useEffect(() => {
    downloadVCard();
  }, []);
  const downloadVCard = () => {
    const myVCard = new VCard();

    // Personal data
    myVCard
      .addName("Bakoussi", "Abdelhalim", "", "", "")
      .addCompany("Flashglass")
      .addJobtitle("General manager")
      .addRole("CEO")
      .addEmail("flashglass@gmail.com")
      .addPhoneNumber("+212661142280", "WORK")
      .addAddress(
        "Siège",
        "Ain Sebaa - Casablanca",
        "162, allée des Mimosas",
        "Casablanca",
        "Grand casablanca",
        "20000",
        "Morocco"
      );

    // Convert the vCard to a string and trigger download
    const blob = new Blob([myVCard.toString()], { type: "text/vcard" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "contact.vcf";
    link.click();
  };
}

export default VCardCreatorDownload;
