/* eslint-disable import/no-unresolved */
import { Gallery } from "next-gallery"

export default function Photography() {
  return (
    <div className="container">
      <Gallery
        // widths={[500, 1000, 1600]}
        // ratios={[2.2, 4, 6, 8]}
        widths={[500, 1000, 1600]}
        ratios={[2.2, 4, 4, 5]}
        gap={'2px'}
        lastRowBehavior='fill'
        images={images}
      />
    </div>
  )
}

const images = [
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOoPpuy46QN2_e_dGhAr5uvI0NF7itzBjt6yPlaKsWsYJyZI4BoNBTzSnQP90PQdLLAQEZMIOSfpRgNIhf7F015tWzKhAKNbgKwMigoDccJ42dGdajS=w2400",
    alt: "Cactus under soft light",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMf_DVfOSJdviXMn_MfBSULkxutj7XXbIidfD_3f_TCllg9p0NF0WVrVhg6gXdPhGgRfkMW_hVUafkfj2vwiFys9MzDABTprG4an3-BZJjOPzAwzN1U=w2400",
    alt: "man with Bike in Brussels",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOXumQdjq6St4-OePcaUNYX3BMQjagUynx4TnR_sqRrdAySHI6kMW6P7z2D0PP_Dw0pg08tD8fZSz0G3Ym1KUuuD8uqvsHhuyn44V-fjZzOxy1TUZAI=w2400",
    alt: "Cube houses in Rotterdam",
    aspect_ratio: 3 / 2,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPMHJTE7UqdTHHY2Z50_PN_piFdtzvLzs_ZTkLDi3qMUCskP3ZI49ZfphPCy3MSodxR82_qXR6fN1loU2SVceILg9fKjb3M-dXdJQ728w8AMcY62E3g=w2400",
    alt: "Icey Peaks of the Rockies",
    aspect_ratio: 3 / 2,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczP-eBJwEGnAUD8wVQ9RpLUvx63abSJVzsXcOnq_19GeHHCCFNmnCml_SLvhnLXYTctt-OFn42F2DAG-S1DXMmrKinDMb2JursYThx29hHJHUGPX0Zdv=w2400",
    alt: "Lush park in the Netherlands",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNkpzLJ5-0eSM-Lvz8ui1dA4wbgJ7rpdmLVBSlzoI8LtrvRpAL8b81Na2PxZoo8K5_OU4QZxrw31dqngFrp91Fzlgf30kLfKfkuuQSnqfO9nZsCKS8D=w2400",
    alt: "Rotterdam cube houses vertical",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczN25KsRerkNJL5mEzRxnyMRcL5oY2Zrcs5la-US-KVfwn95ZTg3Bwqmdp8mFhwfUfSaUIE5yXFF-4C_7rADYh08G3U5RxeK9yaNOUOiHdj0VfC55-q4=w2400",
    alt: "Amsterdam canal and bikes",
    aspect_ratio: 16 / 9,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOFUqJBJemJat8eqnHaRE60klAVlNLGDDAOFpAlGM_hOb5jtFMoIJLVm1pfpS-jXVEqYyddkQfKqCjqv8iWCBBSHCjbArCyQ7bGnon7kuz8LFZHhF0b=w2400",
    alt: "Nationalpark Berchtesgaden am Körnigssee",
    aspect_ratio: 16 / 9,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczM2XuEe97LsK8om2lXxjkJYhW2qWv4PztnjRfZqx1t3MRAS5TT3DgDrq0btpAILur1lFUHCoQjGIyGQbn_vi6fucPJYi0A9JY7j5v-CP4cAl-4cKcFg=w2400",
    alt: "Vienna moving train",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczORzYMGb2x0K9mxCBGoy4fzMH-A0RKtjRRmqU5xUXceCyMdc8Lg_HWgn2FL02KPO6IUQDXAn1t6P1NcM7bCtES5SVPXekuxLL2kCiGnzx4NXW6GTPFs=w2400",
    alt: "Vienna teal dome",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczN4RXVfYEDhakhqVSBxdWwuIoa67FqPSa7WrQ9UWdohYFqEJ1zh6TgjdycVRDHlet7eAU-CbcunBEmHYs2n-NnZGXXnKVuAt3QBzu-U15cBDApLCdff=w2400",
    alt: "White Sands portrait",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNYh4PbLIP51oNcOhcxryXKY99dwar6ljLZ756DUSp2SW2F_h5ZVWQWaoLK68pGwHnbAzQ1bYOlhMj7pmV6LtKXLo7MqidbPuVQwo-oNUGxcH8BXwL1=w2400",
    alt: "Couple holds hands in Paris",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMrGLI1QVNCIpIk4gw20eS0vgJRwGtqnRAnlwgkBWK2L3z_I5t2eloYAaPJVszw7olCmYZopCvg4VM-3ITEFeMyBqcnQ1c3cCSPbd-kJiG37NKnpwbZ=w2400",
    alt: "Paris street at sunset",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPeggCrivQiOGbd_42SIIXzGlwPk4MZSkZQhwUY2A95rJpeuW5Lxhhoq4a3D1kmzDex9JVVd_jc_-Jo_Od5BA4NiKLajn1yOlVvCDmPkRg5Mdj03sbI=w2400",
    alt: "Cactus texture",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPOpcQJW7G0nUUjHLnLf_ZHj7atIks-fPpnVaALCrxjUMkED4ACLT15BN5ij6P0fqLIOYVTGyPV6f2_ZnRdGITZdoCWwrzrCypUVn-Gklh-ZYBaDGUw=w2400",
    alt: "White Sands ultra-wide",
    aspect_ratio: 2.35 / 1,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPVxdM4jB3dlAUWR5ClQo3NFiet9YXKM6ch7XqN5htre23IjR2CCxEbHIBs66mZsTkZKj07ltbCUAIaHkJhTa-C5WZg-LM_Prz3fyJ4npgArWEm7DVF=w2400",
    alt: "Costa Rica leafy greens",
    aspect_ratio: 3 / 2,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPm6RwfmZymNe0sZHRTfcXkgq0n5KwhcvCpewsIhcJr71J6E6Czp-6H-tHBt88o8HjAvatTdGQqPlz0s7yzV6AYq7qCC0l1JrGpRY4pHrav3bBS2oF2=w2400",
    alt: "Sunlight on a wet leaf",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOviw7HYVK8fHMAKjNenykG_tbWu8K4EKx0OLZpv2tybFczw7UQGD7Wl4w_Smdm7WGDjSiqWcaZUccVOA99o_etsTN7EtwJFxK9RC3QhHCzzHwLqAwk=w2400",
    alt: "Leafy sunset protrait in Costa Rica",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOFDKIcNjsf_nmm8ICwOijVd_tq3p_QVADVpP6jRZHtSTCUpWUFBtZ9II1pisKpqm_jtA_ZBoyifh0QL4C3WUUhNpQ2rhyvfANn4TLJRsP9Mw-GLLPG=w2400",
    alt: "Irish Sunset from a ferry",
    aspect_ratio: 16 / 9,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOQNqWH3FqlXfAictQo5H-p7yNYBqWJigmHCdGnjsOd4_1OzCJw8PkmOiCvRWiumgpGjvbVVO0yRrMGfE9sTqsObpBStwl_wCVQnWbMfKjM19AubM33=w2400",
    alt: "Glacier West side sunset",
    aspect_ratio: 16 / 9,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNKMbgs_Gd4LvpT9cSmjVpv0r8TB_b0py5gFjkZ4EtEUKDDXICHXKWpjxUWu4jPKWlce4rrvfWQjWetTmH4FFbAk9jGs8eunJE-dJZacOeiUvMYuRCu=w2400",
    alt: "Canadian Rockies in morning light",
    aspect_ratio: 16 / 9,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMnHcpKH0m0cG7Uq_SGDH6hvGDP3BoM4QPxigDmCo-iHm2uZOdhpQ5r77BBTqIHUdJ68BjFNA_-aVOh5d8gW9hA6cw4BpdxGaPrBDzA6Ss6lIHgnI_d=w2400",
    alt: "Icefield Parkway wildflowers",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMcIZvlkvaA5dxo6c3lDt0FI59xlHSErpe2KFA7DTDn6FWkXwQtBweDLMNp7KmuSsbf8ZtDOfEBvWPQgtC9KUL87ROI69DHN-4lXW3ytCZbVoB8OJZr=w2400",
    alt: "Jasper rapids",
    aspect_ratio: 16 / 9,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNVtyC8HO-bNEUmCLtHprF4BcbgEgjU5GsMde3ZzjQehcYZAeDVIkJUbXqff-3vANdtqJLPdgvXfOoya2jQANbs-BMGMkQYlU6TbIos9DlrIkWYkN9s=w2400",
    alt: "Calgary Library",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNKLxDNUHsi8-lpEthGzfSPa4C_RTNJp3UBr7_J6bcrCLERpkOGbQzaP3_tOLTnIkMEz--0GVnEf332f8zjSQ5N1HR8edI4PnaoVJopTtyqSUc9YFOJ=w2400",
    alt: "Snowy Royal Arch at sunrise",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNqDx4a7dlBBuEfLaT_V_LHWNTNp-yfyNl-P8x97wwSjsky8_fqladM0jJfaSfDBQkxZzsxP7Dgu5rEBSgbfPdNCpQywCzkN6WOTPOgdw_BCpEFNpD2=w2400",
    alt: "Oregon coast ultra-wide",
    aspect_ratio: 16 / 9,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMMCSqS3UXQfFvtYWJdyXmy81y4SCbGEnTTCRF2_qAdIJbAcCBGmXoq36zPXe8g-yA3sCHCAgbgBZPrS0HYus7xy7d2ApDFvootpuWlyVkgzwkm7BxM=w2400",
    alt: "Oregon Coast grasses and ocean",
    aspect_ratio: 2 / 3,
  },

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
    src: "https://lh3.googleusercontent.com/H3DP-SXD_AW9JQudEtrL0UYSdFra8mknzAP2CqpWvgSkyodjs6roj2u6b2ZMD-O1I3wC7jFa-zrdUwKF_GRTNDH1WHxbClGg70R4uUh_waLafJky6U7XI67UCRR-BbyKhopmyxdhbQ=w2400",
    alt: "Portrait in Chinatown in Montreal",
    aspect_ratio: 2 / 3,
  },
  {
    src: "https://lh3.googleusercontent.com/4WWiLPhXP2JYCC_03oeoSOIGxUhGO5co6g1dgNlk0CGB7pZ4GwvurlX7wAIxEN_OXNw9k_0-rCZ6p_U4dUpHCiesc7EKP1nwyzMMuAEsjDhIbrnIcYWccQ31DaUrc195DNJKpg-90g=w2400",
    alt: "Building in the Olympic Peninsula, Washington",
    aspect_ratio: 3 / 2,
  },
  {
    src: "https://lh3.googleusercontent.com/WUdcQfPVEW-9VBQxxvr4lMUALKgth_JgXkfZD8JvXhZYG-K0qVBbJW-qfRvdmc3X9EgWuDgmy8oisbuL9Ryzg-Dzmy4roktekTvXYIAVrH7eIw4Cl_rJAsYlZbgvcB3jSQSpRXt0Zw=w2400",
    alt: "Northern Lights near Reykjavik, Iceland",
    aspect_ratio: 3 / 2,
  },
  {
    src: "https://lh3.googleusercontent.com/0cWjES4JLlxhIamNMKqfUvluzXaGgIYL4n6N5GfJWgzhRciMxASZYJHa0l3P288noHzRmowwffWttQzQA4sEELWyMSKXLf853mCnsvjGfkPIEOaRrZNO36fVu_SxmfHI66rw7ucTO2s=w2400",
    alt: "Sunset lighting of my room",
    aspect_ratio: 2 / 3,
  },
]