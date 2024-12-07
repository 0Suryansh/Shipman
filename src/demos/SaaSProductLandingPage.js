import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/MiniCenteredFooter";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            ShipMAN will refund back <HighlightedText>your token money</HighlightedText> incase of SCAM!
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: BriefcaseIcon,
            title: "Send your own Delivery Partner",
            description: "ShipMAN on your behalf will send delivery partner to seller's location for order pickup, If sellers do not show up then it is a scam, Your token money will be refunded in that case. Else your order will be deliverd to you soon. ",
            iconContainerCss: tw`bg-red-300 text-red-800`
          },
          {
            Icon: MoneyIcon,
            title: "Money Protection",
            description: "You deposit money(partial or whole) in a legal ESCROW account, and if it is scammer who is selling we will refund full amount to you, else your order will be deliverd to you. And that amount will be released to seller.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          }
        ]}
      />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            How to use <HighlightedText>ShipMAN</HighlightedText> to avoid <HighlightedText>SCAMS</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc="https://img.freepik.com/free-vector/features-overview-concept-illustration_114360-1500.jpg?t=st=1716241064~exp=1716244664~hmac=dc8e377da8fc9fe05f78ad991bdbbfbd77bf9cde38f83dacb55a3096f63af55b&w=740"
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      {/* <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Personal",
            price: "$17.99",
            duration: "Monthly",
            mainFeature: "For Individuals",
            features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"]
          },
          {
            name: "Business",
            price: "$37.99",
            duration: "Monthly",
            mainFeature: "For Small Businesses",
            features: ["60 Templates", "15 Landing Pages", "22 Internal Pages", "Priority Assistance"],
            featured: true
          },
          {
            name: "Enterprise",
            price: "$57.99",
            duration: "Monthly",
            mainFeature: "For Large Companies",
            features: ["90 Templates", "27 Landing Pages", "37 Internal Pages", "Personal Assistance"]
          }
        ]}
      /> */}
      {/* <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Jaane logo ko kaisa laga <HighlightedText>RENEWpe</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://content.jdmagicbox.com/comp/chennai/28/044pf001328/catalogue/indian-power-gym-arumbakkam-chennai-gyms-3wi92x3.jpg",
            heading: "",
            quote:
              "RENEWpe ne hamare gym ke membership fees ko auto collect karne ki process ko behad simple bana diya hai. Ab humein har mahine fees ki chinta nahi hoti. Isse humein samay aur urja ki bachat hoti hai aur hum apne members par zyada dhyan de paate hain.",
            customerName: "Gaurav Sharma",
            customerTitle: "Gym Owner"
          },
          {
            stars: 5,
            profileImageSrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4hxmCc97eBKU6v6RpWP3BNAzmJL-8Xbr4-bA2cLkj2Q&s",
            heading: "",
            quote:
              "RENEWpe ki madad se hamare coaching class ka management behad aasan ho gaya hai. Naye plans banana aur members ka data manage karna ab baayein haath ka khel hai. Iske auto collection feature ne hamare financial stability ko mazboot kiya hai.",
            customerName: "Aakash Singh",
            customerTitle: "Director, Coaching Class"
          },
          {
            stars: 5,
            profileImageSrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4rQ8_mJc5NMO8TjZuy55IqSmz50phaeePeU121rzRw&s",
            heading: "",
            quote:
              "RENEWpe ke use se hamari dance academy mein membership fees collect karne ki process bahut hi suvyavasthit ho gayi hai. Iske use se hum apne sabhi members ko track kar sakte hain aur naye membership plans aasan se bana sakte hain. Isse hamare operations mein kaafi sudhaar hua hai.",
            customerName: "Neha Sharma",
            customerTitle: "Dance Academy Owner"
          }
        ]}
      /> */}
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            Some Clarifying question about <HighlightedText>ShipMAN</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "What is ShipMAN ?",
            answer:
              "ShipMAN will send a delivery partner to seller's location for picking up your product. if seller do not ship the order, Meaning it was a potential scam. Hence your token money will be refunded."
          },
          {
            question: "How to access and use ShipMAN ?",
            answer:
              "ShipMAN is currently in building it's product. If gained enough response from users, it will be live within a week."
          },
          {
            question: "How does it stop scams ?",
            answer:
              "Normally, all the sellers send delivery partner to you with the product, sellers give you promise they will send the delivery partner to you and take advance payment to process order. But after it buyer will get scam. ShipMAN stop such scams by sending delivery partner on buyers behalf to sellers collect the order from them and then release the payment to seller if genuine."
          },
          {
            question: "Is COD available ?",
            answer:
              "It will be conditioned to sellers, For e.g. seller selling personalized products can't afford COD as they might doubt what if buyer refuse to take it on delivery, they will be at lost. But for other generic type of product COD would be there. Sellers with generic product not allowing COD is actually kinda red flag."
          },
          {
            question: "Do buyers need to deposit any money in advance ?",
            answer:
              "Only that amount which will facilate delivery cost need to be deposited in advance(around ₹70)"
          },
          {
            question: "How and when refunds are instatiated ?",
            answer:
              "If sellers do not ship order to ShipMAN's delivery partner then your fund will be refunded to you."
          },
          {
            question: "How sellers are paid ?",
            answer:
              "Sellers will be paid as soon as our delivery partner confirm us that delivery is successful, We release your money to sellers."
          },
          {
            question: "Who is running ShipMAN, is it even legit ?",
            answer:
              "Oh hey there! I am starting up this ShipMAN(I do not like the name honestly, AI generated it). I started it because I have been previously scammed by these sellers on Instagram and on Reddit. Due to few bad actors all sellers are looked in same way of being potential scammer. About legitimacy, try to use, if it helps you that is good and if it scams you write about us on reddit, no one will use it after it;). DM me on whatsapp to know me more and my mission."
          }
        ]}
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
