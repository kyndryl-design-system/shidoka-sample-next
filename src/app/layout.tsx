'use client';
import Script from 'next/script';

import '@kyndryl-design-system/shidoka-foundation/scss/root.scss';
import './globals.css';
import '@kyndryl-design-system/shidoka-foundation/scss/utility/typography.scss';
import '@kyndryl-design-system/shidoka-foundation/scss/utility/grid.scss';
import '@kyndryl-design-system/shidoka-applications/components/global/uiShell';
// import '@kyndryl-design-system/shidoka-applications/components/global/header';
// import '@kyndryl-design-system/shidoka-applications/components/global/localNav';
// import '@kyndryl-design-system/shidoka-applications/components/global/footer';

import { UserAvatar } from '@carbon/icons-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script src="https://api.www-poc.kyndryl.com/v1/bridge-ui/webcomponents-core/webcomponents/bdg-header-wc/bug-svt-1.0.9/header.js" />

        <kyn-ui-shell>
          <bdg-header-wc
            isAuthenticated="true"
            accounttype="Personal"
            session='{"user":{"name":"BRIAN PATRICK","email":"brian.patrick3@kyndryl.com","userId":"645a51dced38d80d5b7a70dd"},"expires":"2024-06-29T20:50:16.529Z","id":"00u65yoiefM3JePVx1d7","kpid":"eyJraWQiOiJNRkMtSG4zZE9xYkxCZmd6bkNmZ1VlcTM4Q2JrdXY0M1pvRGI1bjZjemZ3IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHU2NXlvaWVmTTNKZVBWeDFkNyIsIm5hbWUiOiJCUklBTiBQQVRSSUNLIiwidmVyIjoxLCJpc3MiOiJodHRwczovL2Rldi5sb2dpbi5reW5kcnlsLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6IjBvYTN6dHc5dnB3M2NXaXhsMWQ3IiwiaWF0IjoxNzE3MTAyMjEzLCJleHAiOjE3MTcxMDU4MTMsImp0aSI6IklELlFHSXdWZWZFZXZWX3RTOG1NN3pGMnZFaEdrajBnTWNuWVZxYUg3bkRzbEUiLCJhbXIiOlsibWZhIiwicHdkIiwiaHdrIl0sImlkcCI6IjBvYTN4cW02cnBGWk9rV1hWMWQ3IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiQlJJQU4uUEFUUklDSzNAa3luZHJ5bC5jb20iLCJhdXRoX3RpbWUiOjE3MTY0MDIwNTgsImF0X2hhc2giOiI1RDc1LWlDVC1jbkhCS0x5OE1RRWdBIiwibGFzdF9uYW1lIjoiUEFUUklDSyIsImxvd2VyY2FzZUxvZ2luIjoiYnJpYW4ucGF0cmljazNAa3luZHJ5bC5jb20iLCJmaXJzdF9uYW1lIjoiQlJJQU4ifQ.lwAfXpUWFke0QnbvkuAfytomfpQfAunwT3wiom8WcrexaaO92MxmqkLVRO0IU1VbLCjsIcTIm5Pdm06sObCsT4as_FNN-DZFX_9oMbPo_7rGVY4Axq_3JnVu8fIvWYvLtzVEnWhSnEqmkKyHQe-FS2MH4xOsFfcB6c4pM3QsVWGPB7ueHIoAfFZPRgrDIBNeHYwAUxjX9d7RD-8EOVVXFrVf_YooeCktc-mWLF2aHVaLMbDEnupdgtHS1zXXHIukcWKHydYE-7eLW0B3rjjAZ89V0pu6bUny1PUz1GIBI02cxo9Kv2iGVeaJN4FJqeVC_QwDKVTLv9PJfSSZEG1J6w","accountStatusCode":200,"accounts":[{"accountDescription":"","accountId":"645a511dc93192552511494a","accountName":"BRIAN069983","accountStatus":"","accountType":"Personal","flag":"default","tenantId":"645a5116e4e8e7a5307bd7ff","dcp_info":null},{"accountDescription":"Account for AI","accountId":"65671d3a579f633a0b0242ee","accountName":"Kyndryl_AIPioneer","accountStatus":"","accountType":"Customer","tenantId":"65671d3a579f633a0b0242ee","dcp_info":[{"base_host":"dev1-aws-oregon-base.bridge.kyndryl.com","region":"us"}],"license_entitlement":{"bac_id":"BAC35176B6","gbg_id":"GB302C8S"}}],"kpaccount":"645a511dc93192552511494a","kptenantId":"645a5116e4e8e7a5307bd7ff","accountType":"Personal","initialSignIn":false,"kpiamtokenexpiry":1717105758770,"kpiamtoken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImtkTUdzVlNXbnVoNkRUMGloMEg5SUtqZ0hic3JjOHZ5IiwidHlwIjoiSldUIiwieDV0IjoiRVlTdXFhQ1FZY196WUpLMmxDd09MMXFhYVVjIiwieDV0I1MyNTYiOiItUFZiWmdxcWhzVFUxZEJNRV9pbmRheFFIWUtETGNwbWJLTFZyV09ZOFZvIn0.eyJpZCI6IjY0NWE1MWRjZWQzOGQ4MGQ1YjdhNzBkZCIsInVzZXJpZCI6IjY0NWE1MWRjZWQzOGQ4MGQ1YjdhNzBkZCIsIm5hbWUiOiJCUklBTiBQQVRSSUNLIiwiZW1haWwiOiJCUklBTi5QQVRSSUNLM0BreW5kcnlsLmNvbSIsImdpdmVuX25hbWUiOiJCUklBTiIsImZhbWlseV9uYW1lIjoiUEFUUklDSyIsInByZWZlcnJlZF91c2VybmFtZSI6IkJSSUFOLlBBVFJJQ0szQGt5bmRyeWwuY29tIiwiZ3JvdXBzIjpbIjY0NWE1MTE2ZTRlOGU3YTUzMDdiZDdmZiJdLCJ0ZW5hbnQiOiI2NDVhNTExNmU0ZThlN2E1MzA3YmQ3ZmYiLCJtYXN0ZXIiOmZhbHNlLCJ0ZW5hbnRfdHlwZSI6InBlcnNvbmFsIiwic291cmNlX3RlbmFudCI6IiIsImludGVybmFsIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9pYW0uZGV2dGVzdC1sYi1icmlkZ2Uua3luZHJ5bC5jb20iLCJzdWIiOiI2NDVhNTFkY2VkMzhkODBkNWI3YTcwZGQiLCJhdWQiOlsiNjQ1YTUxMWRjOTMxOTI1NTI1MTE0OTRhIl0sImV4cCI6MTcxNzEwNTc1OCwibmJmIjoxNzE3MTAyMjE4LCJpYXQiOjE3MTcxMDIyMTgsImp0aSI6ImFhMmFkOTY2LTAwM2EtNDkwOS1iNTBkLWRlNGQyODUyYzEyMSIsImlkcCI6IjYzNWJlZDU4ZTNmMTMzYTU5MzQwMGI0ZSIsIm92ZXJzaXplIjpmYWxzZSwiaWRwYXV0aCI6dHJ1ZSwiaWRwbmFtZSI6Ikt5bmRyeWxPa3RhRGV2Iiwic3ViX3R5cGUiOiJpYW1faWQiLCJhY2NvdW50X2lkIjoiNjQ1YTUxMWRjOTMxOTI1NTI1MTE0OTRhIiwiYWNjb3VudF90eXBlIjoiUGVyc29uYWwifQ.WA-DvfuO2OVRA9ft8zCpxGa8ueyqoxGqIbGn3raB5HPbAF-EojfGp1AOzb3ZgmJT3_wsnjWGSuOhWxSX8q-0xKqLpdnYsyp-Tm1pTaeZYV2Q-lqRywleAt-_Y_cnoWBBmVo0_ogOoa-rbYAX7dNRjsBI-37d3-RMODmXwIyKeRdkCmxtYOFnGz_cgzyaRPICJvZg548N07S2uKd0uHf5fWPw4XoMKx3MRigB0XilInX_8yeUiINCEhugaeZ2kgI7irxpoIAqsVTWvwZZyyepw2azatCj_zhwsF9knjRdeKPKxqBp8ZJUVDmUq2tprmKc6RM2X0CnfL2CQRYYzN49mg","kppermissions":["kp.consultationsection.view","kp.consultationbutton.view","kp.consultations.view","kp.consultations.create","kp.consultations.modify","kp.notifications.view","kp.inviteuserconsole.view","kp.supporttickets.view","kp.supporttickets.create","kp.supporttickets.modify","kp.allsupporttickets.view","kp.apikeys.view","kp.apikeys.create","kp.apikeys.modify","kp.apikeys.delete","kp.accessgroups.create","kp.account.view"]}'
            headerdetails='{"appTitle":"Marketplace","rootUrl":"/us/en/bridge","domain":"https://www-poc.kyndryl.com","region":"us/en","bridgeuiDomain":"https://api.www-poc.kyndryl.com/v1/bridge-ui","consoleDomain":"https://www-poc.kyndryl.com/us/en/bridge/console","bssDomain":"https://api.www-poc.kyndryl.com/v1/accounts","iamDomain":"https://iam.devtest-lb-bridge.kyndryl.com/api/iam/v4"}'
          ></bdg-header-wc>
          {/* <kyn-header divider="" apptitle="Shidoka Next">
            <kyn-header-nav>
              <kyn-header-link href="javascript:void(0)"> Link 1 </kyn-header-link>
              <kyn-header-link href="javascript:void(0)" isActive>
                {' '}
                Link 2{' '}
              </kyn-header-link>
              <kyn-header-link href="javascript:void(0)">
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

                <div>
                  <kyn-header-link href="javascript:void(0)"> Login </kyn-header-link>
                  <kyn-header-link href="javascript:void(0)"> Sign up </kyn-header-link>
                </div>
              </kyn-header-flyout>

              <kyn-header-flyout assistiveText="My Account" hideMenuLabel>
                <UserAvatar size={20} slot="button" />

                <kyn-header-user-profile
                  name="User Name"
                  subtitle="Job Title"
                  email="user@kyndryl.com"
                  profileLink="#"
                >
                  <img src="https://picsum.photos/id/237/112/112" />
                </kyn-header-user-profile>
              </kyn-header-flyout>
            </kyn-header-flyouts>
          </kyn-header> */}
          {/*
          <kyn-local-nav>
            <kyn-local-nav-link href="javascript:void(0)" active="">
              <UserAvatar size={16} slot="icon" />
              Link 1
            </kyn-local-nav-link>

            <kyn-local-nav-link href="javascript:void(0)">
              <UserAvatar size={16} slot="icon" />
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
              <UserAvatar size={16} slot="icon" />
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
          </kyn-local-nav> */}

          <main>{children}</main>
          {/*
          <kyn-footer>
            <span slot="copyright"> Copyright &copy; 2023 Kyndryl Inc. All rights reserved. </span>
          </kyn-footer> */}
        </kyn-ui-shell>
      </body>
    </html>
  );
}
