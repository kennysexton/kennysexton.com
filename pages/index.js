/* eslint-disable import/no-unresolved */
import { Gallery } from "next-gallery"

/* Start app commands
 - npx
 - next dev
*/

const images = [
  {
    src: "https://lh3.googleusercontent.com/TETc4Tb-4SCq7emfgUKDrkQTEH1706_49w7x4Nc_l1B5tmygS9D0RKg9txRYIGHAmNt1akoqyVG2d-YVykDNLDHu7a5AyHn4zdet-vM8iwHbzG52pC8KzHjbS_2iXp_Is_5PfMlgWg=w2400",
    alt: "Iceland portrait",
    aspect_ratio: 3 / 2,
  },
  {
    src: "https://lh3.googleusercontent.com/Z-mVf3I3SlzZBBnIc1JoN7wwsB8tquZbuNpQpBp7HYnfHohX_CmRx2eaMhbUdXI9qDXbC8bLsU7ZHsQ3_Rg0_gLjnXoavokefwGwPZm4GvWEfDOuO94nIpon92sjDzZUKAgl-WTG8A=w2400",
    alt: "Snowy day in Philadelphia",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/ckLouU_yU2GYct4HwteyJI5gs_FMNRAX1Z8SMnLcazUFHEuNi4ZviPOoiytiRGgx4zO2jCM4Qvb8R-Q37TBAVQkxOKWYOgjQYw4Hze6C6TcNU5HGaClhy6s52wNysWuSOCchqUh7Vg=w2400",
    alt: "Iceland waterfall",
    aspect_ratio: 16 / 9,
  },
  {
    src: "https://lh3.googleusercontent.com/WoohXr_N_l0M3B2f2uamcYrAw7iwgSQpnINgmWUPLSl6NhtQ4nBXzTnZatYFD2SCiVYCeeWkN2TVn6YYgN46ixyaCVRL9-HP9fPHp0OscV6p_0-Hkrf7aNOkRQwd-e5M1PG_Cyp7zw=w2400",
    alt: "Dairy block in Devner",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/0rKANsq6E3i12L9kZwENTPL2B-YTuL96yEw1bMyfvIK-VW5SQg7tTQ0gcwmQoATD8sVkLXMXLDBQMW3k65tjE4mJHM9pyQLz0VctN0nmVb1QB9AJhH0Tn2eTs6Tk5zJTrPsUC94F9A=w2400",
    alt: "Bird landing on hand",
    aspect_ratio: 3 / 2,
  },
  {
    src: "https://lh3.googleusercontent.com/aeoyPPgX-kDaULoTkAL9IQOV6P9AtHiFcaWG2Mn1Fgc6FHEzluhfWjrx1KzbYECiKra5dW5kNA3wrNOFVMxQ1T8W8qUJrTvZbHmy-W3BxzITSVw5QCrS5vwB8A7hD2VERMhroNoJMrk=w2400",
    alt: "Foggy sunrise tree in the Smoky Mountains",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/Q2c7PgzH35wFYkYulnpjYZCwIhsjhba9z13oALcQeIiI_N6YpWmhCe-AKMTAVAVNj5mZNHr8V2cgYib1CKGHXEipmqE0BPl9aCCgCLvJN6fyxsX_5yNi77tyZyxnbyZwDBYM8kZWYA=w2400",
    alt: "Pink sidewalk sofa in Richmond, VA",
    aspect_ratio: 16 / 9,
  },
  {
    src: "https://lh3.googleusercontent.com/qJaIStf2DztM65W46kppsap9-2EcaePSJZgoIszsCPROj6JxHgt-49fYiZxDwGDI8_8N1LTBqOKPCs4BbAgRVNlfGqW_IWta-k9XtHAJh_-5pz75XeTaA_3UkFxIDB_C1ijSuP2t9w=w2400",
    alt: "Two bikers in Denver, CO",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/Kjmocs-fUXcUs63okSIdkVuQ8cn6Z3BoHLY6e5L3TrBhpswa2jMmtuHPyKMAQaOQhPI_zw0f6luk92F4OJZS8X5W0ipkZXHvKXB3UZlrYgwjY0zB-eoFWdvhUXxhtezsu4r20sK2wQ=w2400",
    alt: "Foggy morning outside a Bates State Park in Austin, OR",
    aspect_ratio: 16 / 9,
  },
  {
    src: "https://lh3.googleusercontent.com/LEQEfbEJNaAoHCn_g0f-fVxsF2aHwWX59jz3ZRWhEWrzsMlpdue6o6UNhqb6dxFI_gmcXf3OofEjxGxvzkgDeqqTah7m3rl8w5YshCj2wz4dOISbE8O9WtU9T4ijB0E_X-SBPM8bVMs=w2400",
    alt: "Clingman's Dome in the Smoky Mountains",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/7T6lohYb3-v9DLDvLYbVE6F3QOiPwvyQSKwZHIoARrz7QisgsBSQqwrn290_N7d3QKfE1WyYSAGZ8O7Z4c5LiSi6pv2MW6Maik5RifyrAP3EbneNXbDS0OvPeC2K7yqBSmTy4ul3yQ=w2400",
    alt: "View from the Reading Viaduct in Philadelphia",
    aspect_ratio: 3 / 2,
  },
  {
    src: "https://lh3.googleusercontent.com/_Xw80IQthl1GbyNu0E2GPItLugI84NxdGMoS0nhKkMP-yGY-b1tI8oqhJXWfabyKXaB8tv9zntL6tyVpBft_x2o0rd4Mz0AjkeN0gu1WzTOZNE5jOyTJTNSs4VzgNLsrLYlUAIirPg=w2400",
    alt: "Sunset in Grand Teton National Park in Wyoming",
    aspect_ratio: 2 / 3,
  },
]


export default function Home() {
  return (
    <div className="container">
      <Gallery
        // widths={[500, 1000, 1600]}
        // ratios={[2.2, 4, 6, 8]}
        widths={[500, 1000, 1600]}
        ratios={[2.2, 4, 4, 6]}
        gap={'2px'}
        // lastRowBehavior='fill'
        images={images}

      />
    </div>
  )
}