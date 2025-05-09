'use client';

import '@kyndryl-design-system/shidoka-foundation/scss/root.scss';
import './globals.css';
import '@kyndryl-design-system/shidoka-foundation/scss/utility/typography.scss';
import '@kyndryl-design-system/shidoka-foundation/scss/utility/grid.scss';
import '@kyndryl-design-system/shidoka-applications/components/global/uiShell';
import '@kyndryl-design-system/shidoka-applications/components/global/header';
import '@kyndryl-design-system/shidoka-applications/components/global/localNav';
import '@kyndryl-design-system/shidoka-applications/components/global/footer';
import Image from 'next/image';
import CircleStroke from '@kyndryl-design-system/shidoka-icons/svg/monochrome/16/circle-stroke.svg';
import UserAvatar16 from '@kyndryl-design-system/shidoka-icons/svg/monochrome/16/user.svg';
import UserAvatar20 from '@kyndryl-design-system/shidoka-icons/svg/monochrome/20/user.svg';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body>
        <kyn-ui-shell>
          <kyn-header divider="" apptitle="Shidoka Next">
            <kyn-header-nav>
              <kyn-header-link href="javascript:void(0)">
                <CircleStroke /> Link 1{' '}
              </kyn-header-link>
              <kyn-header-link href="javascript:void(0)" isActive>
                <CircleStroke /> Link 2{' '}
              </kyn-header-link>
              <kyn-header-link href="javascript:void(0)">
                <CircleStroke />
                Link 3
                <kyn-header-link slot="links" href="javascript:void(0)">
                  {' '}
                  Sub Link # 1{' '}
                </kyn-header-link>
                <kyn-header-link slot="links" href="javascript:void(0)">
                  {' '}
                  Sub Link 2{' '}
                </kyn-header-link>
              </kyn-header-link>
            </kyn-header-nav>

            <kyn-header-flyouts>
              <kyn-header-flyout>
                <span slot="button">Login</span>
                <kyn-header-link href="javascript:void(0)"> Login </kyn-header-link>
                <kyn-header-link href="javascript:void(0)"> Sign up </kyn-header-link>
              </kyn-header-flyout>

              <kyn-header-flyout assistiveText="My Account" hideMenuLabel>
                <UserAvatar20 slot="button" />

                <kyn-header-user-profile
                  name="User Name"
                  subtitle="Job Title"
                  email="user@kyndryl.com"
                  profileLink="#"
                >
                  <Image
                    src="https://picsum.photos/id/237/112/112"
                    width={56}
                    height={56}
                    alt="profile picture"
                  />
                </kyn-header-user-profile>
              </kyn-header-flyout>
            </kyn-header-flyouts>
          </kyn-header>

          <kyn-local-nav>
            <kyn-local-nav-link href="javascript:void(0)" active="">
              <UserAvatar16 slot="icon" />
              Link 1
            </kyn-local-nav-link>

            <kyn-local-nav-link href="javascript:void(0)">
              <UserAvatar16 slot="icon" />
              Link 2
              <kyn-local-nav-link slot="links" href="javascript:void(0)">
                {' '}
                L2 Link 1{' '}
              </kyn-local-nav-link>
              <kyn-local-nav-link slot="links" href="javascript:void(0)">
                {' '}
                L2 Link 2{' '}
              </kyn-local-nav-link>
            </kyn-local-nav-link>

            <kyn-local-nav-link href="javascript:void(0)" expanded="">
              <UserAvatar16 slot="icon" />
              Link 3
              <kyn-local-nav-link slot="links" href="javascript:void(0)">
                L2 Link 1
                <kyn-local-nav-link slot="links" href="javascript:void(0)">
                  {' '}
                  L3 Link 1{' '}
                </kyn-local-nav-link>
                <kyn-local-nav-link slot="links" href="javascript:void(0)">
                  {' '}
                  L3 Link 2{' '}
                </kyn-local-nav-link>
              </kyn-local-nav-link>
            </kyn-local-nav-link>
          </kyn-local-nav>

          <main>{children}</main>

          <kyn-footer>
            <span slot="copyright"> Copyright &copy; 2025 Kyndryl Inc. All rights reserved. </span>
          </kyn-footer>
        </kyn-ui-shell>
      </body>
    </html>
  );
}
