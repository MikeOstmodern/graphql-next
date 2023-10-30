import './globals.css'
import type { Metadata } from 'next'

// Apollo Client
import { getClient } from "../lib/client";
import { gql } from "@apollo/client";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export const revalidate = 5;

const query = gql`
query PageQuery($path: String) {
  Page(path: $path) {
    __typename
    title
    description
    logo {
      ... on PageLogo {
        image {
          publicUrl
          sizes {
            height
            width
          }
        }
      }
    }
    navigation {
      ... on Navigation {
        items {
          ... on NavigationItem {
            text {
              ... on Raw {
                items
              }
            }
            href
          }
        }
        itemsMegaNav {
          ... on NavigationItem {
            text {
              ... on Raw {
                items
              }
            }
            href
            items {
              ... on NavigationLink {
                text {
                  ... on Raw {
                    items
                  }
                }
                href
              }
            }
          }
        }
        content {
          ... on PagePromoModule {
            __typename
            url
            title {
              ... on Raw {
                __typename
                items
              }
            }
            media {
              ... on Image {
                __typename
                image {
                  publicUrl
                  sizes {
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
    social {
      ... on SocialBar {
        items {
          ... on SocialLink {
            href
            socialService
          }
        }
      }
    }
    footerNavigation {
      ... on Navigation {
        items {
          ... on NavigationItem {
            text {
              ... on Raw {
                items
              }
            }
            href
          }
        }
      }
    }
    footerLogo {
      ... on PageLogo {
        __typename
        image {
          publicUrl
          sizes {
            height
            width
          }
        }
      }
    }
    disclaimer {
      ... on Raw {
        __typename
        items
      }
    }
    footerContent {
      ... on RichTextModule {
        title {
          ... on Raw {
            items
          }
        }
        items {
          ... on AttachmentEnhancement {
            __typename
            url
            title {
              ... on Raw {
                __typename
                items
              }
            }
            type
          }
          ... on BlockQuote {
            __typename
            attribution {
              ... on Raw {
                __typename
                items
              }
            }
            quote {
              ... on Raw {
                __typename
                items
              }
            }
          }
          ... on CarouselEnhancement {
            __typename
            item {
              ... on Carousel {
                __typename
                title {
                  ... on Raw {
                    __typename
                    items
                  }
                }
                slides {
                  ... on GallerySlide {
                    __typename
                    title {
                      ... on Raw {
                        __typename
                        items
                      }
                    }
                    media {
                      ... on Image {
                        __typename
                        image {
                          publicUrl
                          size {
                            height
                            width
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on ExternalContentWrapper {
            __typename
            item {
              ... on FacebookUrl {
                __typename
                postUrl
              }
              ... on InstagramUrl {
                __typename
                postId
              }
              ... on TweetUrl {
                __typename
                postId
              }
            }
          }
          ... on HtmlModuleEnhancement {
            __typename
            item {
              ... on HtmlModule {
                __typename
                rawHtml
              }
            }
          }
          ... on IframeModuleEnhancement {
            __typename
            item {
              ... on IframeModule {
                __typename
                url
                name
                height
                width
                style
              }
            }
          }
          ... on ImageEnhancement {
            __typename
            item {
              ... on Figure {
                __typename
                image {
                  publicUrl
                  height
                  width
                }
              }
            }
          }
          ... on LinkEnhancement {
            __typename
            target
            href
            body {
              ... on Raw {
                __typename
                items
              }
            }
          }
          ... on LogoListEnhancement {
            __typename
            item {
              ... on LogoList {
                __typename
                title {
                  ... on Raw {
                    __typename
                    items
                  }
                }
                items {
                  ... on LogoPromo {
                    __typename
                    url
                    title {
                      ... on Raw {
                        __typename
                        items
                      }
                    }
                    media {
                      ... on Image {
                        __typename
                        image {
                          publicUrl
                          height
                          width
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PageListEnhancement {
            __typename
            item {
              ... on PageList {
                __typename
                title {
                  ... on Raw {
                    __typename
                    items
                  }
                }
                items {
                  ... on PagePromo {
                    __typename
                    magazineLinkUrl
                    url
                    type
                    title {
                      ... on Raw {
                        __typename
                        items
                      }
                    }
                    media {
                      ... on Image {
                        __typename
                        image {
                          publicUrl
                          size {
                            width
                            height
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PagePromoEnhancement {
            __typename
            item {
              ... on PagePromoModule {
                __typename
                magazineLinkUrl
                url
                title {
                  ... on Raw {
                    __typename
                    items
                  }
                }
                type
                media {
                  ... on Image {
                    __typename
                    image {
                      publicUrl
                      size {
                        height
                        width
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PodcastEpisodeListEnhancement {
            __typename
            item {
              ... on PodcastEpisodeList {
                __typename
                title {
                  ... on Raw {
                    __typename
                    items
                  }
                }
                items {
                  ... on PodcastEpisodePromo {
                    __typename
                    title {
                      ... on Raw {
                        __typename
                        items
                      }
                    }
                    url
                    media {
                      ... on Image {
                        __typename
                        image {
                          publicUrl
                          height
                          width
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on Raw {
            __typename
            items
          }
          ... on RichTextHeading {
            __typename
            text {
              ... on Raw {
                __typename
                items
              }
            }
            tag
          }
        }
      }
      ... on PagePromoModule {
        url
        title {
          ... on Raw {
            items
          }
        }
        description {
          ... on Raw {
            items
          }
        }
      }
    }
    tagManagerHead {
      # if GoogleTagManagerHead manager fails then use
      # googletagmanager_GoogleTagManagerHead
      ... on GoogleTagManagerHead {
        containerId
      }
    }
    main {
      ... on PodcastEpisodeList {
        title {
          ... on Raw {
            items
          }
        }
        items {
          ... on PodcastEpisodePromo {
            title {
              ... on Raw {
                items
              }
            }
            url
          }
        }
      }
      ... on RichTextModule {
        title {
          ... on Raw {
            items
          }
        }
        items {
          ... on AttachmentEnhancement {
            __typename
            url
            title {
              ... on Raw {
                __typename
                items
              }
            }
            type
          }
          ... on BlockQuote {
            __typename
            attribution {
              ... on Raw {
                __typename
                items
              }
            }
            quote {
              ... on Raw {
                __typename
                items
              }
            }
          }
          ... on CarouselEnhancement {
            __typename
            item {
              ... on Carousel {
                __typename
                title {
                  ... on Raw {
                    __typename
                    items
                  }
                }
                slides {
                  ... on GallerySlide {
                    __typename
                    title {
                      ... on Raw {
                        __typename
                        items
                      }
                    }
                    media {
                      ... on Image {
                        __typename
                        image {
                          publicUrl
                          size {
                            height
                            width
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on ExternalContentWrapper {
            __typename
            item {
              ... on FacebookUrl {
                __typename
                postUrl
              }
              ... on InstagramUrl {
                __typename
                postId
              }
              ... on TweetUrl {
                __typename
                postId
              }
            }
          }
          ... on HtmlModuleEnhancement {
            __typename
            item {
              ... on HtmlModule {
                __typename
                rawHtml
              }
            }
          }
          ... on IframeModuleEnhancement {
            __typename
            item {
              ... on IframeModule {
                __typename
                url
                name
                height
                width
                style
              }
            }
          }
          ... on ImageEnhancement {
            __typename
            item {
              ... on Figure {
                __typename
                image {
                  publicUrl
                  height
                  width
                }
              }
            }
          }
          ... on LinkEnhancement {
            __typename
            target
            href
            body {
              ... on Raw {
                __typename
                items
              }
            }
          }
          ... on LogoListEnhancement {
            __typename
            item {
              ... on LogoList {
                __typename
                title {
                  ... on Raw {
                    __typename
                    items
                  }
                }
                items {
                  ... on LogoPromo {
                    __typename
                    url
                    title {
                      ... on Raw {
                        __typename
                        items
                      }
                    }
                    media {
                      ... on Image {
                        __typename
                        image {
                          publicUrl
                          height
                          width
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PageListEnhancement {
            __typename
            item {
              ... on PageList {
                __typename
                title {
                  ... on Raw {
                    __typename
                    items
                  }
                }
                items {
                  ... on PagePromo {
                    __typename
                    magazineLinkUrl
                    url
                    type
                    title {
                      ... on Raw {
                        __typename
                        items
                      }
                    }
                    media {
                      ... on Image {
                        __typename
                        image {
                          publicUrl
                          size {
                            width
                            height
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PagePromoEnhancement {
            __typename
            item {
              ... on PagePromoModule {
                __typename
                magazineLinkUrl
                url
                title {
                  ... on Raw {
                    __typename
                    items
                  }
                }
                type
                media {
                  ... on Image {
                    __typename
                    image {
                      publicUrl
                      size {
                        height
                        width
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PodcastEpisodeListEnhancement {
            __typename
            item {
              ... on PodcastEpisodeList {
                __typename
                title {
                  ... on Raw {
                    __typename
                    items
                  }
                }
                items {
                  ... on PodcastEpisodePromo {
                    __typename
                    title {
                      ... on Raw {
                        __typename
                        items
                      }
                    }
                    url
                    media {
                      ... on Image {
                        __typename
                        image {
                          publicUrl
                          height
                          width
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on Raw {
            __typename
            items
          }
          ... on RichTextHeading {
            __typename
            text {
              ... on Raw {
                __typename
                items
              }
            }
            tag
          }
        }
      }
      ... on GoogleDfpAdModule {
        __typename
        targetingMap
        slot
        sizes
        outOfPage
        hideOnMobile
        hideOnDesktop
        ampWidth
        ampSizes
        ampMultiSizeValidation
        adSizeMaps
        adIndex
      }
      ... on PagePromoModule {
        __typename
        url
        type
        title {
          ... on Raw {
            items
          }
        }
        target
        description {
          ... on Raw {
            items
          }
        }
        categoryUrl
        category {
          ... on Raw {
            items
          }
        }
        authorUrl
        authorName {
          ... on Raw {
            items
          }
        }
        authorImage {
          ... on Image {
            image {
              publicUrl
              size {
                height
                width
              }
            }
          }
        }
        sponsorUrl
        sponsorName {
          ... on Raw {
            items
          }
        }
        sponsorDisplayText
        media {
          ... on Image {
            image {
              publicUrl
            }
          }
        }
        sponsored
        templateType
      }
      ... on PageList {
        __typename
        title {
          ... on Raw {
            items
          }
        }
        ctaButtonText {
          ... on Raw {
            items
          }
        }
        ctaTarget
        ctaUrl
        description {
          ... on Raw {
            items
          }
        }
        templateType
        items {
          ... on PagePromo {
            url
            type
            title {
              ... on Raw {
                items
              }
            }
            categoryUrl
            category {
              ... on Raw {
                items
              }
            }
            authorUrl
            authorName {
              ... on Raw {
                items
              }
            }
          }
        }
      }
    }
  }
}

`;


export default async function RootLayout({
  children,
  cmsData, 
}: {
  children: React.ReactNode,
  cmsData: any,
}) {
  const { data } = await getClient().query({ 
    query,
    variables: {
      path: "/"
    },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  const cmsData = data;

  console.log();
  return (
    <html lang="en">
      <body className={inter.className}>
        <img src={data.Page.logo[0].image.publicUrl} alt="HIA" />
        {data.Page.title}
        {children}
      </body>
    </html>
  )
}