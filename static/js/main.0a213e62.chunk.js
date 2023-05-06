/*! For license information please see main.0a213e62.chunk.js.LICENSE.txt */
(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(10),o=a.n(i),c=(a(37),a(0)),l=a(5),s=a.n(l),m=function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)},u=function(){return r.a.createElement("div",{className:"social-network"},r.a.createElement(s.a,{className:"social-media-item",animationKey:"github",onClick:function(){return m("https://github.com/nicolas-cuveillier")},loop:!0,style:{width:"38px",color:"white"},autoplay:!0}),r.a.createElement(s.a,{className:"social-media-item",animationKey:"linkedin",onClick:function(){return m("https://www.linkedin.com/in/nicolas-cuveillier")},loop:!0,style:{width:"44px",color:"white"},autoplay:!0}),r.a.createElement(s.a,{className:"social-media-item",animationKey:"instagram",onClick:function(){return m("https://www.instagram.com/nicolas_cuveillier")},style:{width:"42px",color:"white"},autoplay:!0}),r.a.createElement("a",{className:"mail-icon",href:"mailto:nicolas.cuveillier@epfl.ch"}," "))},d=a(28),p=a.n(d);var h=function(){return r.a.createElement("section",{name:"section1",className:"welcom_page"},r.a.createElement("div",{className:"pict_component"},r.a.createElement("div",{className:"presentation-container"},r.a.createElement("h2",null,"Hello !"),r.a.createElement("p",{id:"p1"},"I'm Nicolas, a computer science student and here is a bit of my life."),r.a.createElement("p",{id:"p2"},"I'm currently studying abroad in Portugal for the last year of my bachelor and I am looking for an internship either in Cybersecurity or Data Science."),r.a.createElement(s.a,{className:"download-cv-icon",animationKey:"pocket",style:{width:"28px",color:"black"},onClick:function(){!function(e){var t=document.createElement("a");t.href=p.a,t.download=e,document.body.appendChild(t),t.click(),document.body.removeChild(t)}("Nicolas_Cuveillier_CV.pdf")}}),r.a.createElement("p",{className:"download-cv-text"},"curriculum vitae")),r.a.createElement("div",{className:"socialmedia_component"},r.a.createElement(u,null))))},f=a(2),v=a(21);var g=function(e){var t=e.data;return r.a.createElement("div",{className:"flip-card"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("div",{className:"skill-img-container"},0!==t.image.length&&r.a.createElement("div",{className:"skill-img",style:{backgroundImage:"url(".concat(t.image,")")}}),0===t.image.length&&r.a.createElement("div",{className:"skill-title"},t.title)),r.a.createElement("div",{className:"skill-bar-container"},r.a.createElement("div",{className:"progress-light-grey",id:t.title},r.a.createElement("div",{className:"progress-grey",style:{width:t.percent}})))),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("p",null,t.description))))};var C=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(!0),c=Object(f.a)(o,2),l=c[0],s=c[1],m=Object(n.useState)("tecnical"),u=Object(f.a)(m,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){l&&(i(v),s(!1));for(var e=document.getElementsByClassName("skills-selectioner"),t=0;t<2;t++)e[t].style.backgroundColor="";document.getElementById(d).style.backgroundColor="rgba(128, 128, 128, 1)",i((function(){return v.filter((function(e){return e.type===d}))}))}),[l,d,a]),r.a.createElement("section",{name:"section3",className:"skills-page"},r.a.createElement("div",{className:"skills-intro-container"},r.a.createElement("div",{className:"skills-title-selection-container"},r.a.createElement("div",{className:"skills-title"},"Skills"),r.a.createElement("div",{className:"skills-selection-container"},r.a.createElement("div",{className:"skills-selectioner",id:"tecnical",onClick:function(){return p("tecnical")}},"tecnical"),r.a.createElement("div",{className:"skills-selectioner",id:"soft",onClick:function(){return p("soft")}},"soft")))),r.a.createElement("div",{className:"skills-items-container"},r.a.createElement("ul",{className:"skills-items-list"},a.map((function(e){return r.a.createElement("div",{key:e.title,className:"skills-list-elem"},r.a.createElement(g,{data:e}))})))))};var y=function(){var e=document.getElementsByClassName("timeline-outerblock-left"),t=document.getElementsByClassName("timeline-outerblock-right");return window.addEventListener("scroll",(function(){var a=window.scrollY-190,n=Math.floor(a/120.25);n=Math.min(4,n);for(var r=0;r<4;r++)r<=n?r%2===0?2===r?e[1].classList.add("fade-left"):e[r].classList.add("fade-left"):3===r?t[1].classList.add("fade-right"):t[0].classList.add("fade-right"):r%2===0?2===r?e[1].classList.remove("fade-left"):e[r].classList.remove("fade-left"):3===r?t[1].classList.remove("fade-right"):t[0].classList.remove("fade-right")})),r.a.createElement("div",{className:"ag-format-container"},r.a.createElement("div",{className:"timeline-rowblock"},r.a.createElement("div",{className:"timeline-outerblock-left"},r.a.createElement("h3",null,"\xc9cole Polytechnique F\xe9d\xe9rale de Lausanne"),r.a.createElement("p",null,"Bachelor in Communication Systems in the school of Computer and Communication with a GPA of 4.91/6."),r.a.createElement("div",{className:"timeline-innerblock-left"},"2020",r.a.createElement("br",null),"-",r.a.createElement("br",null),"2023"))),r.a.createElement("div",{className:"timeline-rowblock"},r.a.createElement("div",{className:"timeline-outerblock-right"},r.a.createElement("div",{className:"timeline-innerblock-right"},"2022",r.a.createElement("br",null),"-",r.a.createElement("br",null),"2023"),r.a.createElement("h3",null,"Instituto Superior Tecnico"),r.a.createElement("p",null,"I spent a year aborad in Lisbon for the last year of my bachelor. "))),r.a.createElement("div",{className:"timeline-rowblock"},r.a.createElement("div",{className:"timeline-outerblock-left"},r.a.createElement("h3",null,"Gap year"),r.a.createElement("p",null,"I would like to take a year in order to develop professional skills during internships."),r.a.createElement("div",{className:"timeline-innerblock-left"},"2023",r.a.createElement("br",null),"-",r.a.createElement("br",null),"2024"))),r.a.createElement("div",{className:"timeline-rowblock"},r.a.createElement("div",{className:"timeline-outerblock-right"},r.a.createElement("div",{className:"timeline-innerblock-right"},"2024",r.a.createElement("br",null),"-",r.a.createElement("br",null),"2026"),r.a.createElement("h3",null,"\xc9cole Polytechnique F\xe9d\xe9rale de Zurich"),r.a.createElement("p",null,"Things are not fixed but the EPFL's Cyber Security master linked with ETHZ is totally interesting me."))))};var w=function(){return r.a.createElement("section",{name:"section2",className:"education_page"},r.a.createElement("div",{className:"education-title"},"Timeline"),r.a.createElement(y,null))};var E=function(){var e=document.getElementsByClassName("project-content-text-container_top"),t=document.getElementsByClassName("project-content-video-container");return window.addEventListener("scroll",(function(){var a=window.scrollY;a-2e3>0?e[0].classList.add("fade-left"):e[0].classList.remove("fade-left"),a-2450>0?t[0].classList.add("fade-left"):t[0].classList.remove("fade-left")})),r.a.createElement("section",{name:"section4",className:"projects_page"},r.a.createElement("div",{className:"project-section-row1"},r.a.createElement("div",{className:"line-drawing"},r.a.createElement("svg",{width:"346",height:"155",viewBox:"0 0 346 155",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{className:"path",d:"M120.007 135.051L120 135.047C117.49 133.801 115.085 132 112.788 129.634C111.766 128.583 110.035 128.532 109.019 129.645L100.817 138.616C99.9724 139.54 99.9309 140.968 100.793 141.91C108.486 150.306 118.406 154.5 130.509 154.5C135.997 154.5 141.021 153.686 145.576 152.05C150.128 150.473 154.033 148.161 157.281 145.112C160.527 142.065 163.049 138.403 164.849 134.133C166.652 129.856 167.549 125.09 167.549 119.844V41.2535C167.549 39.8728 166.43 38.7535 165.049 38.7535H131.977C130.596 38.7535 129.477 39.8728 129.477 41.2535V53.4235C129.477 54.8042 130.596 55.9235 131.977 55.9235H146.69C147.519 55.9235 148.19 56.5951 148.19 57.4235V119.844C148.19 125.169 146.74 129.392 143.884 132.567L143.881 132.57C141.053 135.769 136.632 137.416 130.509 137.416C126.557 137.416 123.06 136.624 120.007 135.051ZM148.65 29.2906H167C168.381 29.2906 169.5 28.1713 169.5 26.7906V9C169.5 7.61929 168.381 6.5 167 6.5H148.65C147.27 6.5 146.15 7.61929 146.15 9V26.7906C146.15 28.1713 147.27 29.2906 148.65 29.2906Z",stroke:"black"}),r.a.createElement("path",{className:"path",d:"M92.3694 110.804L92.3694 110.804L92.375 110.809C96.2443 114.482 100.854 117.348 106.197 119.408C111.548 121.472 117.455 122.5 123.912 122.5C130.485 122.5 136.451 121.472 141.803 119.408C147.147 117.347 151.728 114.481 155.54 110.806C159.41 107.075 162.357 102.654 164.38 97.55C166.463 92.4425 167.5 86.771 167.5 80.5425C167.5 74.4822 166.462 68.8688 164.381 63.7077C162.359 58.4917 159.413 54.0142 155.543 50.2816C151.731 46.4922 147.147 43.596 141.801 41.591C136.449 39.5274 130.484 38.5 123.912 38.5C117.456 38.5 111.55 39.5278 106.199 41.591C100.852 43.5963 96.2398 46.4925 92.3695 50.2814L92.3694 50.2814C88.5574 54.0141 85.6119 58.4913 83.5315 63.7062L83.5304 63.7091C81.5082 68.8698 80.5 74.4827 80.5 80.5425C80.5 86.7702 81.5076 92.4408 83.531 97.5476L83.5329 97.5522C85.6138 102.654 88.5594 107.073 92.3694 110.804ZM146.614 70.5963L146.613 70.5964L146.617 70.6066C147.77 73.7197 148.348 77.0304 148.348 80.5425C148.348 84.2277 147.769 87.564 146.619 90.5577L146.619 90.5576L146.616 90.5655C145.523 93.5622 143.913 96.1941 141.787 98.4659C139.665 100.733 137.082 102.506 134.03 103.783C131.045 105 127.675 105.614 123.912 105.614C120.09 105.614 116.691 105 113.707 103.783C110.716 102.507 108.193 100.736 106.13 98.4709C104.06 96.1978 102.448 93.5628 101.294 90.5617C100.202 87.5667 99.6516 84.2289 99.6516 80.5425C99.6516 77.0284 100.201 73.7159 101.297 70.6015C102.451 67.4306 104.062 64.7443 106.126 62.5336C108.19 60.3227 110.715 58.5775 113.71 57.3003L113.71 57.3003L113.718 57.2971C116.699 55.9705 120.094 55.3014 123.912 55.3014C127.67 55.3014 131.036 55.9701 134.018 57.2971L134.018 57.2973L134.028 57.3016C137.083 58.5798 139.668 60.3262 141.791 62.5386C143.91 64.7474 145.519 67.4303 146.614 70.5963Z",stroke:"black"}),r.a.createElement("path",{className:"path",d:"M335.214 114.997L335.215 114.997C340.708 110.291 344.053 104.077 345.257 96.3868C345.458 95.1034 344.597 93.9285 343.356 93.6533L331.416 91.0042C329.954 90.6797 328.592 91.6995 328.292 93.1005C327.625 96.212 326.298 98.9235 324.312 101.244C321.937 104.018 318.292 105.447 313.274 105.447C309.198 105.447 305.961 104.225 303.514 101.814C301.087 99.4243 299.828 95.7426 299.828 90.6672V58.0723C299.828 57.2439 300.499 56.5723 301.328 56.5723H331.408C332.788 56.5723 333.908 55.453 333.908 54.0723V43.3931C333.908 42.0124 332.788 40.8931 331.408 40.8931H301.154C300.325 40.8931 299.654 40.2215 299.654 39.3931V10C299.654 8.61929 298.534 7.5 297.154 7.5H283.286C281.905 7.5 280.786 8.61928 280.786 10V39.3931C280.786 40.2215 280.114 40.8931 279.286 40.8931H269C267.619 40.8931 266.5 42.0124 266.5 43.3931V54.5015C266.5 55.8822 267.619 57.0015 269 57.0015H279.286C280.114 57.0015 280.786 57.6731 280.786 58.5015V90.6672C280.786 95.3014 281.55 99.5983 283.086 103.553L283.086 103.553L283.089 103.561C284.682 107.455 286.898 110.803 289.738 113.6C292.579 116.399 296.008 118.58 300.017 120.148C304.033 121.718 308.454 122.5 313.274 122.5C322.033 122.5 329.358 120.008 335.214 114.997Z",stroke:"black"}),r.a.createElement("path",{className:"path",d:"M281.034 119.502L281.053 119.496L281.071 119.489C282.248 119.003 283.01 118.713 283.547 118.514C283.683 118.463 283.807 118.418 283.92 118.376C284.247 118.257 284.491 118.167 284.712 118.072C285.249 117.84 285.68 117.559 286.975 116.716C287.159 116.596 287.361 116.465 287.584 116.32C288.761 115.556 289.092 113.967 288.298 112.802L285.359 108.491L283.195 105.158C283.108 105.024 283.043 104.876 283.002 104.72L282.716 103.625C282.508 102.831 281.975 102.293 281.305 102.034C280.648 101.781 279.883 101.803 279.175 102.059C279.15 102.069 279.12 102.078 279.079 102.092C278.86 102.163 278.334 102.336 276.656 103.017C272.4 104.743 267.348 105.614 261.488 105.614C258.088 105.614 254.777 105.112 251.551 104.109C248.393 103.052 245.646 101.527 243.302 99.5353C241.021 97.4912 239.16 94.9172 237.724 91.8035C236.298 88.6543 235.576 84.9053 235.576 80.5425C235.576 76.066 236.327 72.263 237.81 69.1169C239.307 65.9395 241.171 63.3336 243.397 61.2884C245.691 59.2344 248.179 57.7416 250.86 56.8025L250.86 56.8025L250.866 56.8006C253.629 55.7974 256.233 55.3014 258.68 55.3014C264.875 55.3014 269.856 57.3504 273.671 61.4295L273.671 61.4296L273.676 61.4347C277.196 65.0937 279.766 69.9175 280.234 75.8346C280.34 77.1703 281.421 78.2935 282.811 78.2935H297C298.381 78.2935 299.5 77.1742 299.5 75.7935V42.5468C299.5 41.1661 298.381 40.0468 297 40.0468H282.495C281.153 40.0468 280.05 41.1062 279.997 42.447L279.965 43.2365C279.936 43.9745 279.225 44.6556 278.116 44.99C277.021 45.3201 275.852 45.2063 275.219 44.6729C274.009 43.654 272.667 42.757 271.204 41.9592C266.965 39.6468 261.995 38.5 256.311 38.5C250.863 38.5 245.706 39.5609 240.845 41.6841C235.989 43.7486 231.751 46.6462 228.136 50.3756L228.136 50.3758C224.577 54.0508 221.736 58.4956 219.608 63.7024L219.607 63.7051C217.534 68.8669 216.5 74.4812 216.5 80.5425C216.5 86.8838 217.533 92.6402 219.607 97.8046L219.609 97.8091C221.741 102.969 224.764 107.39 228.679 111.066L228.685 111.071C232.658 114.688 237.456 117.496 243.069 119.498L243.07 119.498C248.747 121.502 255.034 122.5 261.927 122.5C268.767 122.5 275.195 121.387 281.034 119.502Z",stroke:"black"}),r.a.createElement("path",{className:"path",d:"M160.39 110.813L160.393 110.816C164.423 114.487 169.191 117.35 174.688 119.41C180.192 121.472 186.134 122.5 192.51 122.5C199.519 122.5 205.979 121.56 211.887 119.673C217.296 117.963 220.639 116.059 225.156 111.91C226.197 110.955 226.198 109.335 225.209 108.351L224.023 107.169C223.964 107.111 223.911 107.048 223.862 106.981L221.761 104.051C221.715 103.987 221.675 103.92 221.639 103.849L219.942 100.469C219.91 100.405 219.883 100.34 219.86 100.272L219.518 99.25C218.938 97.5158 216.783 96.9966 215.425 98.1658C213.175 100.104 210.914 101.683 207.683 103.017C203.426 104.743 198.372 105.614 192.51 105.614C185.038 105.614 179.132 103.849 174.738 100.372C170.987 97.3142 168.174 93.627 166.908 89.3174C166.668 88.5004 167.312 87.6689 168.258 87.6689H232.726C234.236 87.6689 235.393 86.3452 235.229 84.8561C235.107 83.759 234.996 82.6604 234.886 81.5655C234.361 76.357 233.844 71.2351 232.222 66.78C230.037 60.7219 226.99 55.5931 223.076 51.4036C219.221 47.2133 214.564 44.0286 209.114 41.8498C203.662 39.6137 197.598 38.5 190.929 38.5C184.495 38.5 178.609 39.5567 173.276 41.6779C167.95 43.7398 163.356 46.664 159.501 50.452L159.501 50.452C155.705 54.1828 152.742 58.6293 150.611 63.7855L150.609 63.7882C148.534 68.8945 147.5 74.4812 147.5 80.5425C147.5 86.7769 148.623 92.4537 150.879 97.5652L150.881 97.5696C153.19 102.67 156.36 107.086 160.39 110.813ZM206.008 59.8852L206.012 59.8876C209.725 62.4075 212.18 65.6193 213.406 69.5272C213.665 70.3528 213.016 71.2073 212.056 71.2073H168.31C167.337 71.2073 166.733 70.352 167.031 69.5812C168.536 65.6861 171.936 62.4488 175.757 59.8893L175.757 59.8893L175.76 59.8869C180.239 56.8308 185.29 55.3014 190.929 55.3014C196.568 55.3014 201.589 56.8308 206.008 59.8852Z",stroke:"black"}),r.a.createElement("path",{className:"path",d:"M105.301 58.0503L105.308 58.0522L105.316 58.0538C106.83 58.3946 107.636 58.6545 108.641 59.09C109.873 59.6235 111.338 59.1463 111.947 57.9149L118.564 44.533C119.171 43.3059 118.683 41.7801 117.386 41.2284C115.289 40.3367 113.154 39.6876 110.982 39.2821C108.193 38.7613 105.518 38.5 102.957 38.5C94.8371 38.5 87.7855 40.1766 81.8207 43.5501L81.8188 43.5512C78.67 45.3501 75.9314 47.8204 73.6023 50.9537C73.1034 51.6248 72.0602 51.8619 71.0443 51.614C70.0234 51.3649 69.345 50.714 69.345 49.9355V42.891C69.345 41.5103 68.2257 40.391 66.845 40.391H34C32.6193 40.391 31.5 41.5103 31.5 42.891V54.9644C31.5 56.3451 32.6193 57.4644 34 57.4644H48.5988C49.4272 57.4644 50.0988 58.1359 50.0988 58.9644V103.013C50.0988 103.841 49.4272 104.513 48.5988 104.513H34C32.6193 104.513 31.5 105.632 31.5 107.013V119C31.5 120.381 32.6193 121.5 34 121.5H85.2675C86.6482 121.5 87.7675 120.381 87.7675 119V107.013C87.7675 105.632 86.6482 104.513 85.2675 104.513H70.845C70.0166 104.513 69.345 103.841 69.345 103.013V85.0713C69.345 80.3059 70.0432 76.2187 71.4234 72.7971C72.867 69.3065 74.8536 66.4193 77.3788 64.1248C79.9088 61.8259 82.9016 60.1126 86.3643 58.9871L86.3689 58.9855C89.8986 57.8006 93.6642 57.2065 97.6687 57.2065C100.576 57.2065 103.118 57.4901 105.301 58.0503Z",stroke:"black"}),r.a.createElement("path",{className:"path",d:"M60.1808 64.0746L60.1827 64.0728C66.4248 58.0599 69.5 48.9558 69.5 36.8621C69.5 24.9496 66.4235 15.8809 60.1875 9.7481C53.96 3.56226 45.2452 0.5 34.1144 0.5H3C1.61929 0.5 0.5 1.61929 0.5 3V119C0.5 120.381 1.61929 121.5 3 121.5H14.9411C16.3218 121.5 17.4411 120.381 17.4411 119V74.4483C17.4411 73.6199 18.1127 72.9483 18.9411 72.9483H34.2684C45.293 72.9483 53.9533 70.0108 60.1808 64.0746ZM47.638 23.1614L47.6408 23.1639C50.892 26.1049 52.5589 30.5467 52.5589 36.5862C52.5589 42.815 50.8891 47.346 47.6408 50.2844L47.638 50.2869C44.4168 53.2456 39.9809 54.7529 34.2684 54.7529H18.9411C18.1127 54.7529 17.4411 54.0813 17.4411 53.2529V20.1954C17.4411 19.367 18.1127 18.6954 18.9411 18.6954H34.2684C39.9809 18.6954 44.4168 20.2027 47.638 23.1614Z",stroke:"black"}))),r.a.createElement("div",{className:"project-content-text-container_top"},r.a.createElement("h1",null,"7-Weeks School Project"),r.a.createElement("p",null,"Insurance & Banking - NCMB : The idea of this project was to rebuild a simplified version of the network infrastructure of a bank composed of a front-office, consisting of a public website enabling the clients to see the products and services offered by the bank, and a private website and mobile app giving the possibility to the clients to access their bank account information and subscribe to their products.")),r.a.createElement("div",{className:"project-picture-border"},r.a.createElement("div",{className:"project-picture-1"})),r.a.createElement("div",{className:"project-picture-2"})),r.a.createElement("div",{className:"project-section-row2"},r.a.createElement("div",{className:"project-content-video-container"},r.a.createElement("div",{className:"project-content-video-icon"},r.a.createElement("iframe",{className:"project-video",width:"100%",height:"100%",src:"https://www.youtube.com/embed/37fvJs_g-iE",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;",allowFullScreen:!0}))),r.a.createElement("div",{className:"project-content-text-container_mid"},r.a.createElement("h3",{id:"h3-con"},"Conception"),r.a.createElement("p",{id:"p-con"},"We used VirtualBox to create 5 VMs according to the following roles : database server, web server, router 1, router 2, client.",r.a.createElement("br",null)),r.a.createElement("h3",{id:"h3-sec"},"Security"),r.a.createElement("p",{id:"p-sec"},"Concerning the security, we implemented a firewall in each of the router creating two zones : an internal and totally safe one as well as a DMZ that contains the web server. All communications where encrypted using ssl and self-signed ssl certificates for simplification. The Challenge was to implement a Two-Factor Authentication in order to connect to the website using the mobile application. For that, we have created a protocol describe in the following picture."),r.a.createElement("h3",{id:"h3-conc"},"Conclusion"),r.a.createElement("p",{id:"p-conc"},"While having the foundations of a bank\u2019s secured infrastructure, enhancements can be added. When performing any operation (buy stocks, bank transfer...), the user\u2019s identity could be verified once again to be sure it is the right one. Moreover, we could use a biometric authentication."))))},b=a(11),k=function(){return r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"nav-logo-container"}),r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-list-item"},r.a.createElement("div",{className:"item-container"},r.a.createElement(b.Link,{to:"section2",className:"item",smooth:!0,duration:500},"Education"))),r.a.createElement("li",{className:"nav-list-item"},r.a.createElement("div",{className:"item-container"},r.a.createElement(b.Link,{to:"section3",className:"item",smooth:!0,duration:600},"Skills"))),r.a.createElement("li",{className:"nav-list-item"},r.a.createElement("div",{className:"item-container"},r.a.createElement(b.Link,{to:"section4",className:"item",smooth:!0,duration:700},"Projects")))))},L=a(29),N=a.n(L);function _(){_=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(I){l=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var i=t&&t.prototype instanceof d?t:d,o=Object.create(i.prototype),c=new N(r||[]);return n(o,"_invoke",{value:E(e,a,c)}),o}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(I){return{type:"throw",arg:I}}}e.wrap=s;var u={};function d(){}function p(){}function h(){}var f={};l(f,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(x([])));g&&g!==t&&a.call(g,i)&&(f=g);var C=h.prototype=d.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;n(this,"_invoke",{value:function(n,i){function o(){return new t((function(r,o){!function n(r,i,o,c){var l=m(e[r],e,i);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(u).then((function(e){s.value=e,o(s)}),(function(e){return n("throw",e,o,c)}))}c(l.arg)}(n,i,r,o)}))}return r=r?r.then(o,o):o()}})}function E(e,t,a){var n="suspendedStart";return function(r,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw i;return j()}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=b(o,a);if(c){if(c===u)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=m(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}function b(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),u;var r=m(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function x(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=h,n(C,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,c,"GeneratorFunction")),e.prototype=Object.create(C),e},e.awrap=function(e){return{__await:e}},y(w.prototype),l(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,a,n,r,i){void 0===i&&(i=Promise);var o=new w(s(t,a,n,r),i);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(C),l(C,c,"Generator"),l(C,i,(function(){return this})),l(C,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return o.type="throw",o.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),L(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;L(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var x=function(){var e=Object(n.useCallback)(function(){var e=Object(c.a)(_().mark((function e(t){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),t=Object(n.useCallback)(function(){var e=Object(c.a)(_().mark((function e(t){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return r.a.createElement("div",{className:"App"},r.a.createElement(N.a,{id:"tsparticles",init:e,loaded:t,style:{width:"100%",height:"100px",position:"absolute",top:"0",left:"0"},options:{fullScreen:{zIndex:-1},particles:{number:{value:60,limit:90,density:{enable:!0,value_area:500}},links:{color:"#000000",distance:140,enable:!0,opacity:1,width:1},color:{value:"#0030ff"},shape:{type:"circle"},opacity:{value:.5,random:!0,anim:{enable:!0,speed:1,opacity_min:.5,sync:!1}},size:{value:5,random:!0,anim:{enable:!0,speed:1,size_min:5,sync:!1}},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},backgroundMask:{enable:!0,cover:{color:"#202020"}}}}),r.a.createElement(k,null),r.a.createElement(h,null),r.a.createElement(w,null),r.a.createElement(C,null),r.a.createElement(E,null),r.a.createElement("div",{className:"website-footer"},r.a.createElement(u,null),r.a.createElement("p",{className:"footer-text"},"All rights reserved.")))};o.a.render(r.a.createElement(n.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))},21:function(e){e.exports=JSON.parse('[{"title":"Java","image":"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg","type":"tecnical","percent":"90%","description":"I\'ve learnt Java during two 6-months courses through different projects such as the implementation of the game \\"Ticket To Ride\\"."},{"title":"Python","image":"https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg","type":"tecnical","percent":"65%","description":"I\'ve learnt Python through a machine learning course, mainly using numpy\'s framework."},{"title":"Scala","image":"https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg","type":"tecnical","percent":"50%","description":"A course of functional programming is given at EPFL and Scala was the programming language used during the labs."},{"title":"C","image":"https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg","type":"tecnical","percent":"70%","description":"I\'ve learnt the concept of system-oriented programming through the C language during a course at EPFL."},{"title":"html","image":"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg","type":"tecnical","percent":"60%","description":"I\'ve learnt HTML in order to realise this portfolio."},{"title":"css","image":"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg","type":"tecnical","percent":"55%","description":"I\'ve learnt CSS in order to realise this portfolio."},{"title":"git","image":"https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg","type":"tecnical","percent":"75%","description":"I have used Git in many occasions, mostly for courses but also for some personal uses."},{"title":"react.js","image":"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg","type":"tecnical","percent":"65%","description":"I\'ve learnt Javascript and more specially the react.js framework in order to realise this portfolio."},{"title":"virtualbox","image":"https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png","type":"tecnical","percent":"90%","description":"I have used VirtualBox in many occasions, mostly for courses but also for some personal uses."},{"title":"SQL","image":"https://upload.wikimedia.org/wikipedia/commons/6/6f/Sql_database_shortcut_icon.png","type":"tecnical","percent":"75%","description":"I\'ve learnt SQL during a course at Instituto Superior Tecnico through both theorical and practical aspects"},{"title":"github","image":"https://upload.wikimedia.org/wikipedia/commons/2/29/GitHub_logo_2013.svg","type":"tecnical","percent":"75%","description":"I have used Github in many occasions, mostly for courses but also for some personal uses."},{"title":"Linux","image":"https://upload.wikimedia.org/wikipedia/commons/4/4b/Kali_Linux_2.0_wordmark.svg","type":"tecnical","percent":"65%","description":"I have used Linux in many occasions, mostly for courses but also for some personal uses."},{"title":"bash","image":"https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg","type":"tecnical","percent":"30%","description":"I have learn a bit of bash scripting through my bachelor and for some personal interests."},{"title":"confident with teamwork","image":"","type":"soft","percent":"95%","description":"I was able to work on my communication skills through the many course-related projects."},{"title":"independent","image":"","type":"soft","percent":"95%","description":"I have lived in 3 differents country : France (home), Switzerland and Portugal."},{"title":"voluntary","image":"","type":"soft","percent":"100%","description":"I\'m ready to put efforts to be part of a project and would really like to help people or companies with whatever I can give to them."},{"title":"meticulous","image":"","type":"soft","percent":"80%","description":"I like when everything is precisely done as it should be, either in my academic or personnal life."},{"title":"persistent","image":"","type":"soft","percent":"75%","description":"I try to be as persistent as I can and I keep challenging myself through sports such as trail running."}]')},28:function(e,t,a){e.exports=a.p+"static/media/NCCV.178416d4.pdf"},32:function(e,t,a){e.exports=a(120)},37:function(e,t,a){}},[[32,1,2]]]);
//# sourceMappingURL=main.0a213e62.chunk.js.map