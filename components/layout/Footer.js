import {
  RiFacebookFill,
  RiLinkedinFill,
  RiYoutubeLine,
  RiInstagramLine,
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
            rel="noopener noreferrer"
          >
            <RiFacebookFill />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.youtube.com/channel/UCsFG5jgM4UJVm6jL2VrQqLQ/featured"
            target="_blank"
            aria-label="Youtube"
            rel="noopener noreferrer"
          >
            <RiYoutubeLine />
          </SocialIconLink>
        </SocialIcons>
      </Container>
      <Container className="footer">
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/" passHref>
              <FooterLinkTitle>ראשי</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/about" passHref>
              <FooterLinkTitle>אודות</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/our_services" passHref>
              <FooterLinkTitle>השירותים שלנו</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/mortgage_deniers" passHref>
              <FooterLinkTitle>מסורבי משכנתא</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/mortgage_advice" passHref>
              <FooterLinkTitle>ייעוץ משכנתאות</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/mortgage_routes" passHref>
              <FooterLinkTitle>מסורבי משכנתא</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/loan_consolidation" passHref>
              <FooterLinkTitle>איחוד הלוואות</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/non_bank_mortgage" passHref>
              <FooterLinkTitle>משכנתא חוץ בנקאית</FooterLinkTitle>
            </Link>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <Link href="/contact" passHref>
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
