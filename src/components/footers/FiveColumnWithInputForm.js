import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import LogoImage from "images/logo.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const SubscribeNewsletterColumn = tw(Column)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(PrimaryButtonBase)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <Content>
        <SixColumns>
          <Column>
            <ColumnHeading>Main</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">FAQs</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Support</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">About Us</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Product</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Log In</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Personal</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Business</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Team</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Press</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Logos</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Events</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Stories</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Office</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="https://cfmerchant-docs.s3.ap-south-1.amazonaws.com/website_contactUs_1243208?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCmFwLXNvdXRoLTEiSDBGAiEAn4WpOXRqHrcvo%2BosCP9Uhyma22vUlTE0jBZuHKa2DdICIQC0J2X1GSDyTc8zf6qWZN8PpvykeRTvamHNsN7Unk1wWSqJBQghEAAaDDE4NTE1MjczNTE5NSIMFi0yGIvDAgb9f2D6KuYEXZLE5L8BppxHGxxqyHOWHGM0%2BnTorqTf0ziLWTu63kAP3qBRhcAB94sEYuFVmzZJ6lK75bbZ9rahVyYBhRAjeZ4Nl87U7KwTVZvzKkq5A%2BY12VHLiMoCILThxynHe1OnpACKSEYrpwMXPHn79CW%2B4w%2BnV%2B4ZF1gxxYYz6afXfJ%2B61bb4EWa7ruluWX0%2FWu%2BcQOk5%2FQmA5KWQYNx4jhzJHZIPi%2FIQiQbpiHnU35hbf%2F5FvbCLRF%2BNw0dpMHE%2FB0n90i8196B2Wol%2B%2FmiHGXKoEw7hI35pHAwsMBM9vpEQUsfpFR8RN%2BDVwcUKwlZ6ZVixsznBf%2FqtgNCnYd0Ju50wrGqOOkA1GVBYGC2L3OHhSB%2FecHehbTZ4%2BMdb6mprHsL%2F1uJjgwAwc2SIYH7nfmeyVAxk6zpjgACmYxI6Q09vDoAJOBOezrzWjrkbcovBqIyZaqhJFaUvWLfuXKMvwyQ%2BpUurt9oNMppfnflYaoo3us5KqGk00NkEeYAcrIJoyT6AWUO2EFFDxrIGzrONh58XDiq62gxMIAw5eV33wCOVbtJ9a%2FHrOVc2ycoa5LrWP5n6cF0k%2FPzxIn4eEZI9iTyDWDdRCVMWojE%2B8xoUNQ%2BYFVY8e2yw8kpbpzGh0ZypBo8IEyfi5%2F1Y3qHJxKBySzqJCyWx40kZ9oCQrQCAcaGWSHH6GcGpF4G06yO24qkjFLjy1dLtg1uzmt%2FZtuIr0ij4AmBxPgpHG9yauoGl4szM0W%2B6%2B5nP5Aw0X8hzNe0fhrSI%2B3e%2F3bRdqsNAHSd3np8%2Fdau4Xla91IMmKhdueccvrUDzTvNDRsgw9c2ozgY6lwHXBBrjumX%2BcEE8%2BVP34WaHV729kYVBdABFJAPgoUa%2B%2FRz9VT%2F09pCNlP8uBmBioJOka%2FpNPaAFz1wAKcVWhlB95aTDT4aSFmDYb7Ejwkd6mU9YCKdU%2B1J6U%2BNrf0o1F3oWCfLntlukwbT7L0xbGfnQTeNDh5gsvrjeCrY3jnnsu1FAlzWXy2HIYICtJe9JmsFPPRshcKFH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260330T074743Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=ASIASWG7WQ7NSNLIS5CS%2F20260330%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=643edd875a80ad74afb4f1152632484ece85ab2d3412af5bc80c42c74c850bce">Contact Us</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="https://cfmerchant-docs.s3.ap-south-1.amazonaws.com/website_refundPolicy_1243208?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCmFwLXNvdXRoLTEiRjBEAiBYi%2B4dKbUu2iBZyckoKGZ0DZy%2B2OGpQQpz5f%2B0255YHQIgAtBr5p39gXkdDn9HVl21osZVMlJQB2eLaNd74%2BuoSdsqiQUIIRAAGgwxODUxNTI3MzUxOTUiDNzG4w4yUghgM0a8zyrmBMiZFTXwMaEO9hRsYiPA269VZ2wEgIQO%2BHNUlWVfTzRY9Yu0PZWNY0B8MZSWKIRtgTAVuc8q%2FFlOuRHOZbIDh1Zqpx8UzV%2FL17BtfTe7S5aFSVUEggI5oRCFQAhz2lO%2Bw8cxDczCid9FUpm%2F6OGgzwJaqf8YgNcJLRPjD1dmuttBho9Jl04VrTIX2iAv64E6apxSy%2BSSuJnwLq0r%2BilbjaQwlGg46uCbQ1VlodNPvfy9NCNlHyxl3H%2FOATki0yjZaLkheDvx1jHPkMFehmLqBG5v2n9cm%2F9is%2BnUUGcJ2FQ0E4dL%2BHxg1enGZqpnkcUcpR3s0GDesPK1nIMrYAVusA9AjqG%2FopMx4FKrx5Z1XyMdfgmJTrJPogUB67wBLtYKue%2B5X4z7%2FzacrMPe288vqYw%2FycK8Tz7rN2kORa5wx%2Bs2kZ24x6CZwEXi%2Fcq7LQbEs4LxYBn5gXZA0FTiAIhtBV4ZAe35KVMvPLyxftcSc%2BjTrE6qADu7sAFPlHolRv4g2RCrBPb9S%2BFD%2BPBeh0uvxia3zb5IxXCM6ZDD0noOsF0E2%2BTGwcCC9QQs6c6XmvjmKpZJx7zL4hxNCuup5mkmf933fD70ZmOtZU31u12YJQby1YFey6c6QTh3H1MEwYCxin41Pv3MRAjblPOda7lConFwgEc30ktW%2F9hZ2BV%2Fw6%2Be%2Br%2FlLfpGs4UVoOT%2BUVZ9TPyDv6iBRn7SbaH7rdi28ZXx8OtlXH%2BL947cW9OOxp6Bl9M5%2FQt3YpyeBaCvO6QZRd74kZB%2FEI1RkJ%2FZU8Lo8ZABw9mUTmVvyct1t9AdhTTZD3dS%2B9NLMLjQqM4GOpkBWCFQuBDcD2DSO3FkYQNtPqC7Rfe2%2BNiMzoS7GYcJwPG3Ssb5STMXaRmvvDapsJeejTXDO3mtVhY8wFQFTWr98pLQJ%2BeUKEDg17o3u9cWo2Kl6p1axa9rNmOFCaXdVp1hyxzUWYRR%2B4vRTufcl40k5huloG8yxIN8HvEGA4hBWTqkKqAqltS7L9OZoJSNLv1uj63KmVUw%2FU6e&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260330T074815Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=ASIASWG7WQ7NVEGZT6SH%2F20260330%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=e6ed5d88810208351dcc4462b8c4f25e68df51b7cce7f95e81fe011bc89efaee">Privacy Policy</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="https://cfmerchant-docs.s3.ap-south-1.amazonaws.com/website_tnc_1243208?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCmFwLXNvdXRoLTEiRjBEAiBYi%2B4dKbUu2iBZyckoKGZ0DZy%2B2OGpQQpz5f%2B0255YHQIgAtBr5p39gXkdDn9HVl21osZVMlJQB2eLaNd74%2BuoSdsqiQUIIRAAGgwxODUxNTI3MzUxOTUiDNzG4w4yUghgM0a8zyrmBMiZFTXwMaEO9hRsYiPA269VZ2wEgIQO%2BHNUlWVfTzRY9Yu0PZWNY0B8MZSWKIRtgTAVuc8q%2FFlOuRHOZbIDh1Zqpx8UzV%2FL17BtfTe7S5aFSVUEggI5oRCFQAhz2lO%2Bw8cxDczCid9FUpm%2F6OGgzwJaqf8YgNcJLRPjD1dmuttBho9Jl04VrTIX2iAv64E6apxSy%2BSSuJnwLq0r%2BilbjaQwlGg46uCbQ1VlodNPvfy9NCNlHyxl3H%2FOATki0yjZaLkheDvx1jHPkMFehmLqBG5v2n9cm%2F9is%2BnUUGcJ2FQ0E4dL%2BHxg1enGZqpnkcUcpR3s0GDesPK1nIMrYAVusA9AjqG%2FopMx4FKrx5Z1XyMdfgmJTrJPogUB67wBLtYKue%2B5X4z7%2FzacrMPe288vqYw%2FycK8Tz7rN2kORa5wx%2Bs2kZ24x6CZwEXi%2Fcq7LQbEs4LxYBn5gXZA0FTiAIhtBV4ZAe35KVMvPLyxftcSc%2BjTrE6qADu7sAFPlHolRv4g2RCrBPb9S%2BFD%2BPBeh0uvxia3zb5IxXCM6ZDD0noOsF0E2%2BTGwcCC9QQs6c6XmvjmKpZJx7zL4hxNCuup5mkmf933fD70ZmOtZU31u12YJQby1YFey6c6QTh3H1MEwYCxin41Pv3MRAjblPOda7lConFwgEc30ktW%2F9hZ2BV%2Fw6%2Be%2Br%2FlLfpGs4UVoOT%2BUVZ9TPyDv6iBRn7SbaH7rdi28ZXx8OtlXH%2BL947cW9OOxp6Bl9M5%2FQt3YpyeBaCvO6QZRd74kZB%2FEI1RkJ%2FZU8Lo8ZABw9mUTmVvyct1t9AdhTTZD3dS%2B9NLMLjQqM4GOpkBWCFQuBDcD2DSO3FkYQNtPqC7Rfe2%2BNiMzoS7GYcJwPG3Ssb5STMXaRmvvDapsJeejTXDO3mtVhY8wFQFTWr98pLQJ%2BeUKEDg17o3u9cWo2Kl6p1axa9rNmOFCaXdVp1hyxzUWYRR%2B4vRTufcl40k5huloG8yxIN8HvEGA4hBWTqkKqAqltS7L9OZoJSNLv1uj63KmVUw%2FU6e&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260330T074758Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=ASIASWG7WQ7NVEGZT6SH%2F20260330%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=0a38119fa5a6717fd7e8b4256640aa3c434621e81cece2d00fd71ae516683114">Terms and Conditions</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>Subscribe to our Newsletter</ColumnHeading>
              <SubscribeText>
                We deliver high quality blog posts written by professionals weekly. And we promise no spam.
              </SubscribeText>
              <SubscribeForm method="get" action="#">
                <Input type="email" placeholder="Your Email Address" />
                <SubscribeButton type="submit">Subscribe</SubscribeButton>
              </SubscribeForm>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn>
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Treact Inc.</LogoText>
          </LogoContainer>
          <CopywrightNotice>&copy; 2018 Treact Inc. All Rights Reserved.</CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
