import {
  RiFacebookFill,
  RiYoutubeLine,
} from "react-icons/ri";
import {
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "../../styles/Footer.elements";

import Link from "next/link";
import { WrapContent, Container } from "./Styles";
import Letter from "../Letter";
function Footer() {
  return (
    <WrapContent
      className="pt pb background-blue-black"
      style={{ overflow: "hidden" }}
    >
      <Container>
        <Letter />
      </Container>
      <Container className="pb2 ">
        <SocialIcons>
          <SocialIconLink
            href="https://www.facebook.com/sosofinance/?ref=page_internal"
            target="_blank"
            aria-label="Facebook"
            rel="noopener noreferrer apple-touch-icon"
          >
            <RiFacebookFill />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.youtube.com/channel/UCsFG5jgM4UJVm6jL2VrQqLQ/featured"
            target="_blank"
            aria-label="Youtube"
            rel="noopener noreferrer apple-touch-icon"
           >
            <RiYoutubeLine />
          </SocialIconLink>
        </SocialIcons>
      </Container>
      <Container className="footer">
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/" passHref rel="apple-touch-icon">
              <FooterLinkTitle>ראשי</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/about" passHref rel="apple-touch-icon">
              <FooterLinkTitle>אודות</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/our_services" passHref rel="apple-touch-icon">
              <FooterLinkTitle>השירותים שלנו</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/mortgage_deniers" passHref rel="apple-touch-icon">
              <FooterLinkTitle>מסורבי משכנתא</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/mortgage_advice" passHref rel="apple-touch-icon">
              <FooterLinkTitle>ייעוץ משכנתאות</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/mortgage_routes" passHref rel="apple-touch-icon">
              <FooterLinkTitle>מסורבי משכנתא</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/loan_consolidation" passHref rel="apple-touch-icon">
              <FooterLinkTitle>איחוד הלוואות</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/non_bank_mortgage" passHref rel="apple-touch-icon">
              <FooterLinkTitle>משכנתא חוץ בנקאית</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/contact" passHref rel="apple-touch-icon">
              <FooterLinkTitle>צור קשר</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </Container>
      <WebsiteRights>סוסופייננס © כל הזכויות שמורות</WebsiteRights>
    </WrapContent>
  );
}
export default Footer;
