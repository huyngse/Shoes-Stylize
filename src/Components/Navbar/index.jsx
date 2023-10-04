import { useAuth } from "../../AuthContext.jsx";
import { useCart } from "../../CardContext.jsx";
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

function Navbar({ isSearchVisible, login, signUp, avatar, large }) {



  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const ProductOptions = [
    {
      text: "Lồng Chim Cu Gáy",
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-chim-cu-gay",
    },
    {
      text: "Lồng Chim Họa Mi",
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-chim-hoa-mi",
    },
    {
      text: "Lồng Chim Chào Mào",
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-chim-chao-mao",
    },
    {
      text: "Lồng Chim Khuyên",
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-chim-khuyen",
    },
    {
      text: "Lồng Chim Chòe Than",
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-chim-choe-than",
    },
    {
      text: "Lồng Chim Khướu",
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-chim-khuou",
    },
    {
      text: "Lồng Chim Hút Mật",
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-chim-yen-hut-mat",
    },
    {
      text: "Lồng Chim Chòe Lửa",
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-choe-lua",
    },
  ];

  const { cart } = useCart();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0); // Used to count the number of products added

  return (
    <>
      {
        large ?
          <>
            <nav className="py-0 nav  nav-header shadow-sm" >
              <div className="container d-flex flex-wrap align-items-center">
                <ul className="nav me-auto ">
                  <li className="nav-item "><a href="/" className="nav-link link-light px-2 active py-1" aria-current="page">Trang Chủ</a></li>
                  <div className="dropdown nav-item">
                    <button className=" dropdown-toggle nav-link link-light px-2 active  bg-transparent py-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Sản Phẩm
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      {
                        ProductOptions.map((option, index) => (
                          <li key={index}><a className="dropdown-item" href={option.href}>{option.text}</a></li>
                        ))
                      }

                    </ul>
                  </div>
                  <div className="dropdown nav-item">
                    <button className="dropdown-toggle nav-link link-light px-2 active  bg-transparent py-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Dịch Vụ
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="/service">Đặt lồng chim theo yêu cầu</a></li>
                    </ul>
                  </div>
                  <li className="nav-item"><a href="/blog" className="nav-link link-light px-2 py-1">Blog</a></li>
                </ul>
                <ul className="nav d-flex align-items-center">
                  {
                    login ?
                      <li className="nav-item"><a href="/login" className="nav-link link-light px-2 py-1">Đăng Nhập</a></li>
                      : <></>
                  }
                  {
                    signUp ?
                      <li className="nav-item"><a href="/sign-up" className="nav-link link-light px-2  me-2 py-1" >Đăng Ký</a></li>
                      :
                      <></>
                  }
                  {
                    avatar ?
                      <div class="dropdown text-end">
                        <a href="#" class="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                          <img src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/274521980_1834277470105356_2367113117133775173_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=fe8171&_nc_ohc=hVjWZ-K2JFkAX9GopKa&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBWgJ4zCsefPzPNBqBqIyBBfOTrAZk9AVmdpvBlC_4VxQ&oe=6521F9F0" alt="mdo" width="32" height="32" class="rounded-circle" />
                        </a>
                        <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                          <li><a class="dropdown-item" href="#">New project...</a></li>
                          <li><a class="dropdown-item" href="#">Settings</a></li>
                          <li><a class="dropdown-item" href="#">Profile</a></li>
                          <li><hr class="dropdown-divider" /></li>
                          <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                      </div> :
                      <></>
                  }
                </ul>
              </div>
            </nav>
            <header className="py-3 border-bottom nav-header shadow-sm ">
              <div className="container d-flex flex-wrap justify-content-center">
                <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-light text-decoration-none">
                  <svg
                    width="120px"
                    fill="white"
                    version="1.1"
                    viewBox="0 0 846.89972 188.30623"
                    id="svg45"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m 72.360497,185.91726 c -13.79934,-4.08629 -24.61373,-10.81206 -33.86288,-21.06021 -20.04922,-22.21476 -24.4915,-53.47481 -11.39744,-80.202681 l 3.53844,-7.22275 -3.05218,-6.15175 c -3.50172,-7.05774 -7.22192,-19.66565 -7.22192,-24.47532 0,-1.80215 -0.49256,-3.58106 -1.09461,-3.95314 -0.60204,-0.37207 -5.18404,-0.97316 -10.1822454,-1.33573 L 1.5844727e-6,40.856439 6.5464916,35.244159 c 3.6005404,-3.08675 6.5653004,-6.07146 6.5883304,-6.63269 0.0231,-0.56122 -2.23207,-4.66748 -5.0114004,-9.12501 -2.77932,-4.45753 -4.92594,-8.23195 -4.7703,-8.3876 0.15567,-0.15566 5.38348,1.09172 11.6173954,2.77194 l 11.33435,3.05496 5.44824,-5.44127 c 2.99653,-2.9926902 8.20335,-6.7920102 11.57072,-8.4429302 5.65001,-2.77003003 6.99034,-3.00167003 17.3685,-3.00167003 18.95342,0 13.80735,-4.11373997 89.091063,71.21908023 l 64.62257,64.664761 -2.70435,1.77195 c -21.14542,13.85501 -71.09772,-0.21304 -106.47629,-29.98687 -6.658633,-5.60376 -9.778303,-7.26626 -7.884213,-4.20153 1.50436,2.43411 21.273793,18.17709 31.089803,24.75774 37.25323,24.97456 75.63515,33.45698 92.81355,20.51186 l 3.42984,-2.58464 21.05701,21.057 21.05698,21.05699 -93.36478,-0.0547 -93.364783,-0.0547 z M 63.073907,36.851309 c 2.96927,-1.53547 5.25006,-5.40193 5.25006,-8.90009 0,-2.76073 -6.34148,-9.03368 -9.13236,-9.03368 -3.03921,0 -7.94315,2.68805 -9.20485,5.04555 -1.9893,3.71706 -1.2267,8.20078 1.93209,11.35956 3.31703,3.31705 6.77924,3.79149 11.15506,1.52866 z M 342.27128,161.37564 c -16.02985,-3.0641 -28.35916,-12.37744 -35.12961,-26.53626 -5.83581,-12.20427 -6.67643,-17.43816 -6.65419,-41.431631 0.0218,-23.5021 0.92911,-28.77527 7.13655,-41.47437 8.73705,-17.87424 28.52933,-28.07523 51.32737,-26.45426 23.82672,1.69412 39.93384,14.43359 45.52374,36.00574 0.88319,3.4083 1.6058,8.54136 1.6058,11.4068 v 5.20988 h -9.06617 -9.06613 l -0.73085,-5.84944 c -1.64709,-13.18277 -7.04279,-21.7823 -16.61706,-26.48384 -5.09508,-2.50197 -7.02699,-2.87099 -15.03027,-2.87099 -11.24906,0 -17.95814,2.11675 -24.24283,7.64876 -5.15099,4.53408 -9.39312,12.99908 -11.08159,22.1128 -1.76178,9.50953 -0.6242,43.507571 1.66732,49.830711 3.6994,10.20787 9.03119,16.2644 17.84068,20.26563 6.90884,3.13798 23.06159,3.04199 30.10221,-0.17888 9.8805,-4.52004 15.86929,-12.8664 17.80885,-24.81953 0.57935,-3.57047 1.05685,-6.83616 1.0611,-7.25708 0.004,-0.42092 3.91079,-0.76531 8.68122,-0.76531 h 8.67352 v 5.39789 c 0,15.39996 -8.57929,31.29143 -21.25171,39.36468 -10.80087,6.88094 -28.0017,9.66114 -42.55795,6.8787 z m 105.64662,0.005 c -3.08675,-0.68446 -7.03647,-2.00008 -8.77715,-2.9236 -10.53466,-5.5892 -15.30761,-20.98144 -11.01646,-35.52694 2.10235,-7.12622 8.17113,-13.15682 16.3013,-16.1987 7.41628,-2.77479 22.93225,-5.14624 33.72207,-5.15407 4.55997,-0.003 9.72581,-0.29301 11.47965,-0.64378 l 3.18879,-0.63776 v -7.116231 c 0,-8.98623 -1.84312,-12.99692 -7.41072,-16.1261 -5.15963,-2.89988 -18.10087,-3.94465 -25.18089,-2.0329 -6.10155,1.64753 -11.02138,6.67809 -11.89906,12.16686 l -0.68043,4.25522 -8.79217,-0.29285 c -8.6871,-0.28934 -8.79594,-0.32545 -9.10757,-3.0212 -0.96229,-8.32496 5.79973,-17.96811 16.26779,-23.19905 8.64165,-4.31829 15.68979,-5.49549 29.92214,-4.99771 10.80355,0.37787 13.06776,0.7823 18.73121,3.34574 3.9511,1.78839 7.77675,4.47509 9.89363,6.9482 6.22697,7.27478 6.62352,9.88381 6.62352,43.577241 0,33.88731 0.0467,34.13091 6.49844,33.88837 2.0488,-0.077 4.63911,-0.62921 5.75623,-1.22707 1.93233,-1.03415 2.03112,-0.76012 2.03112,5.63364 v 6.72065 l -3.59222,1.50092 c -13.01097,5.43635 -24.24902,1.14948 -27.14591,-10.35509 l -1.13181,-4.49477 -4.72842,5.03324 c -9.50834,10.12131 -25.36738,14.3337 -40.95308,10.87773 z m 28.86511,-16.20326 c 9.32831,-3.92099 16.03309,-14.60253 16.03309,-25.54275 v -5.04264 l -11.98986,0.71139 c -14.03831,0.83293 -24.68118,2.80289 -29.18575,5.40218 -6.48018,3.73927 -9.07282,15.43588 -4.66389,21.04093 2.81296,3.57608 5.36806,4.8409 11.58328,5.73394 6.64989,0.95549 12.11356,0.26498 18.22313,-2.30305 z m 198.07675,16.10269 c -13.16818,-2.86488 -23.27646,-10.97241 -29.04241,-23.29393 -4.16661,-8.90386 -5.3386,-16.48556 -4.76148,-30.80257 0.75638,-18.764181 6.11065,-30.818381 17.51901,-39.440831 8.00228,-6.04811 16.65199,-8.31742 29.86318,-7.83478 9.20594,0.3363 11.96151,0.84209 16.80284,3.08415 15.73824,7.28853 23.26809,21.49668 23.28489,43.936361 l 0.006,7.90821 H 693.83757 659.1435 v 3.97416 c 0,7.41491 3.81627,17.24286 8.52335,21.94994 9.78096,9.78095 29.35268,9.56456 37.75196,-0.4174 2.40124,-2.85373 5.76579,-11.59367 5.76579,-14.97756 0,-1.00884 2.18544,-1.34542 8.73604,-1.34542 h 8.73605 l -0.70589,4.84697 c -2.49119,17.10592 -13.5705,28.78352 -30.76588,32.42723 -8.38737,1.77727 -14.10645,1.77356 -22.32522,-0.0145 z m 35.29879,-64.045531 c -0.0167,-9.74209 -7.40222,-19.78699 -16.32274,-22.20027 -11.01047,-2.97867 -23.47722,0.90665 -28.8215,8.9824 -2.26192,3.41801 -5.87076,13.0684 -5.87076,15.69901 0,0.459371 11.47966,0.835211 25.51035,0.835211 h 25.51034 l -0.006,-3.316351 z m 60.72031,64.524741 c -11.30095,-2.25162 -18.4131,-8.03455 -21.05294,-17.11821 -0.76789,-2.64235 -1.35718,-8.29097 -1.30951,-12.55251 0.14677,-13.12338 5.41274,-20.70478 17.62877,-25.38 7.17252,-2.74501 22.55257,-5.11976 33.30526,-5.14247 4.48983,-0.009 9.94232,-0.31113 12.11665,-0.67032 l 3.95333,-0.65306 -0.69811,-7.754121 c -0.38395,-4.26476 -1.47418,-9.08689 -2.42271,-10.71584 -2.55507,-4.38789 -8.41376,-6.97685 -17.04123,-7.53053 -14.57451,-0.93533 -23.93795,3.76806 -25.45847,12.78818 l -0.73106,4.33676 h -8.70269 -8.7027 l 0.41455,-6.5102 c 0.47151,-7.40513 3.15988,-11.86725 10.23982,-16.99592 8.56266,-6.20277 14.03975,-7.54647 30.91014,-7.58318 12.39585,-0.0269 16.35126,0.33059 20.80228,1.88055 6.95353,2.42139 13.02667,7.8639 16.08278,14.41275 2.32617,4.98472 2.38115,5.80185 2.39091,35.526461 0.006,18.76615 0.40994,31.17176 1.05376,32.37475 1.82968,3.41878 4.55628,4.2079 9.11381,2.6377 l 4.12819,-1.42227 v 6.48713 c 0,6.09659 -0.1747,6.57747 -2.90167,7.98764 -4.26911,2.20766 -12.34417,3.00324 -17.2029,1.69493 -5.10096,-1.37355 -9.14002,-5.80894 -10.09107,-11.08128 -0.37665,-2.08808 -0.85941,-4.10564 -1.07279,-4.48347 -0.21341,-0.37783 -2.79341,1.70623 -5.73337,4.63126 -2.93996,2.92502 -7.43667,6.29377 -9.99267,7.48612 -8.30444,3.87392 -19.75906,5.19559 -29.02636,3.34915 z m 26.72424,-15.85832 c 5.03704,-2.03766 12.11313,-9.17246 14.38664,-14.50598 1.13087,-2.65295 2.21607,-7.34907 2.41152,-10.43582 l 0.35539,-5.61228 -11.73476,0.28463 c -21.8833,0.53079 -31.46408,3.51398 -34.78739,10.83187 -3.37675,7.43559 -1.95696,14.69817 3.58303,18.32811 5.30682,3.47716 18.52668,4.04597 25.78557,1.10947 z m -227.25699,12.55841 c -0.54895,-1.26277 -9.00351,-23.4185 -18.78792,-49.23497 l -17.78977,-46.939031 9.28566,-0.29565 c 6.08374,-0.19369 9.53064,0.10072 9.99609,0.85385 0.39074,0.63222 6.85771,17.63435 14.37107,37.782511 7.51335,20.14817 13.89025,36.63251 14.17086,36.63186 0.28062,-5.3e-4 5.76654,-14.11462 12.19097,-31.36438 6.42441,-17.249781 12.78286,-34.233141 14.12989,-37.740811 l 2.44913,-6.37759 h 8.57432 c 4.71587,0 8.57431,0.32688 8.57431,0.7264 0,0.39952 -8.33566,22.67005 -18.52369,49.490071 l -18.52368,48.76367 h -9.55957 c -8.93763,0 -9.62453,-0.14938 -10.55767,-2.29593 z"
                      id="path1006" />
                  </svg>

                </a>
                <form className="input-group col-12 col-lg-auto mb-3 mb-lg-0 me-auto w-50">
                  <input type="text" className="form-control" placeholder="Tìm Kiếm sản phẩm" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button className="btn btn-light" type="button" id="button-addon2"><SearchIcon /></button>
                </form>
                <div className="position-relative">
                  <a href="/view-cart" id="shopping-cart-button">
                    <button className="nav-link text-white text-center " >
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart.length}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                      <svg fill="white" baseProfile="tiny" height="40px" version="1.2" viewBox="0 0 24 24" width="40px" xmlns="http://www.w3.org/2000/svg"><g id="Layer_1"><g><path d="M20.756,5.345C20.565,5.126,20.29,5,20,5H6.181L5.986,3.836C5.906,3.354,5.489,3,5,3H2.75c-0.553,0-1,0.447-1,1    s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124c0.016,0.053,0.029,0.103,0.054,0.151    c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112c0.058,0.054,0.125,0.092,0.193,0.13    c0.038,0.021,0.071,0.049,0.112,0.065C6.748,16.972,6.87,17,6.999,17C7,17,18,17,18,17c0.553,0,1-0.447,1-1s-0.447-1-1-1H7.847    l-0.166-1H19c0.498,0,0.92-0.366,0.99-0.858l1-7C21.031,5.854,20.945,5.563,20.756,5.345z M18.847,7l-0.285,2H15V7H18.847z M14,7    v2h-3V7H14z M14,10v2h-3v-2H14z M10,7v2H7C6.947,9,6.899,9.015,6.852,9.03L6.514,7H10z M7.014,10H10v2H7.347L7.014,10z M15,12v-2    h3.418l-0.285,2H15z" /><circle cx="8.5" cy="19.5" r="1.5" /><circle cx="17.5" cy="19.5" r="1.5" /></g></g></svg>

                    </button>

                  </a>
                  <div id="shopping-cart-button-div" className="bg-light text-dark">
                    <div className="p-5">
                      <img className="img-fluid" src="https://simg.nicepng.com/png/small/195-1957315_lol-haha-or-emoji-asian-troll-face-png.png"></img>
                      Giỏ hàng đang trống

                    </div>
                  </div>
                </div>



              </div>
            </header>
          </>
          :
          // ###################################################################
          <nav className="py-2 nav nav-header shadow-sm" >
            <div className="container d-flex flex-wrap align-items-center">
              <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-light text-decoration-none">
                <svg
                  width="120px"
                  fill="white"
                  version="1.1"
                  viewBox="0 0 846.89972 188.30623"
                  id="svg45"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m 72.360497,185.91726 c -13.79934,-4.08629 -24.61373,-10.81206 -33.86288,-21.06021 -20.04922,-22.21476 -24.4915,-53.47481 -11.39744,-80.202681 l 3.53844,-7.22275 -3.05218,-6.15175 c -3.50172,-7.05774 -7.22192,-19.66565 -7.22192,-24.47532 0,-1.80215 -0.49256,-3.58106 -1.09461,-3.95314 -0.60204,-0.37207 -5.18404,-0.97316 -10.1822454,-1.33573 L 1.5844727e-6,40.856439 6.5464916,35.244159 c 3.6005404,-3.08675 6.5653004,-6.07146 6.5883304,-6.63269 0.0231,-0.56122 -2.23207,-4.66748 -5.0114004,-9.12501 -2.77932,-4.45753 -4.92594,-8.23195 -4.7703,-8.3876 0.15567,-0.15566 5.38348,1.09172 11.6173954,2.77194 l 11.33435,3.05496 5.44824,-5.44127 c 2.99653,-2.9926902 8.20335,-6.7920102 11.57072,-8.4429302 5.65001,-2.77003003 6.99034,-3.00167003 17.3685,-3.00167003 18.95342,0 13.80735,-4.11373997 89.091063,71.21908023 l 64.62257,64.664761 -2.70435,1.77195 c -21.14542,13.85501 -71.09772,-0.21304 -106.47629,-29.98687 -6.658633,-5.60376 -9.778303,-7.26626 -7.884213,-4.20153 1.50436,2.43411 21.273793,18.17709 31.089803,24.75774 37.25323,24.97456 75.63515,33.45698 92.81355,20.51186 l 3.42984,-2.58464 21.05701,21.057 21.05698,21.05699 -93.36478,-0.0547 -93.364783,-0.0547 z M 63.073907,36.851309 c 2.96927,-1.53547 5.25006,-5.40193 5.25006,-8.90009 0,-2.76073 -6.34148,-9.03368 -9.13236,-9.03368 -3.03921,0 -7.94315,2.68805 -9.20485,5.04555 -1.9893,3.71706 -1.2267,8.20078 1.93209,11.35956 3.31703,3.31705 6.77924,3.79149 11.15506,1.52866 z M 342.27128,161.37564 c -16.02985,-3.0641 -28.35916,-12.37744 -35.12961,-26.53626 -5.83581,-12.20427 -6.67643,-17.43816 -6.65419,-41.431631 0.0218,-23.5021 0.92911,-28.77527 7.13655,-41.47437 8.73705,-17.87424 28.52933,-28.07523 51.32737,-26.45426 23.82672,1.69412 39.93384,14.43359 45.52374,36.00574 0.88319,3.4083 1.6058,8.54136 1.6058,11.4068 v 5.20988 h -9.06617 -9.06613 l -0.73085,-5.84944 c -1.64709,-13.18277 -7.04279,-21.7823 -16.61706,-26.48384 -5.09508,-2.50197 -7.02699,-2.87099 -15.03027,-2.87099 -11.24906,0 -17.95814,2.11675 -24.24283,7.64876 -5.15099,4.53408 -9.39312,12.99908 -11.08159,22.1128 -1.76178,9.50953 -0.6242,43.507571 1.66732,49.830711 3.6994,10.20787 9.03119,16.2644 17.84068,20.26563 6.90884,3.13798 23.06159,3.04199 30.10221,-0.17888 9.8805,-4.52004 15.86929,-12.8664 17.80885,-24.81953 0.57935,-3.57047 1.05685,-6.83616 1.0611,-7.25708 0.004,-0.42092 3.91079,-0.76531 8.68122,-0.76531 h 8.67352 v 5.39789 c 0,15.39996 -8.57929,31.29143 -21.25171,39.36468 -10.80087,6.88094 -28.0017,9.66114 -42.55795,6.8787 z m 105.64662,0.005 c -3.08675,-0.68446 -7.03647,-2.00008 -8.77715,-2.9236 -10.53466,-5.5892 -15.30761,-20.98144 -11.01646,-35.52694 2.10235,-7.12622 8.17113,-13.15682 16.3013,-16.1987 7.41628,-2.77479 22.93225,-5.14624 33.72207,-5.15407 4.55997,-0.003 9.72581,-0.29301 11.47965,-0.64378 l 3.18879,-0.63776 v -7.116231 c 0,-8.98623 -1.84312,-12.99692 -7.41072,-16.1261 -5.15963,-2.89988 -18.10087,-3.94465 -25.18089,-2.0329 -6.10155,1.64753 -11.02138,6.67809 -11.89906,12.16686 l -0.68043,4.25522 -8.79217,-0.29285 c -8.6871,-0.28934 -8.79594,-0.32545 -9.10757,-3.0212 -0.96229,-8.32496 5.79973,-17.96811 16.26779,-23.19905 8.64165,-4.31829 15.68979,-5.49549 29.92214,-4.99771 10.80355,0.37787 13.06776,0.7823 18.73121,3.34574 3.9511,1.78839 7.77675,4.47509 9.89363,6.9482 6.22697,7.27478 6.62352,9.88381 6.62352,43.577241 0,33.88731 0.0467,34.13091 6.49844,33.88837 2.0488,-0.077 4.63911,-0.62921 5.75623,-1.22707 1.93233,-1.03415 2.03112,-0.76012 2.03112,5.63364 v 6.72065 l -3.59222,1.50092 c -13.01097,5.43635 -24.24902,1.14948 -27.14591,-10.35509 l -1.13181,-4.49477 -4.72842,5.03324 c -9.50834,10.12131 -25.36738,14.3337 -40.95308,10.87773 z m 28.86511,-16.20326 c 9.32831,-3.92099 16.03309,-14.60253 16.03309,-25.54275 v -5.04264 l -11.98986,0.71139 c -14.03831,0.83293 -24.68118,2.80289 -29.18575,5.40218 -6.48018,3.73927 -9.07282,15.43588 -4.66389,21.04093 2.81296,3.57608 5.36806,4.8409 11.58328,5.73394 6.64989,0.95549 12.11356,0.26498 18.22313,-2.30305 z m 198.07675,16.10269 c -13.16818,-2.86488 -23.27646,-10.97241 -29.04241,-23.29393 -4.16661,-8.90386 -5.3386,-16.48556 -4.76148,-30.80257 0.75638,-18.764181 6.11065,-30.818381 17.51901,-39.440831 8.00228,-6.04811 16.65199,-8.31742 29.86318,-7.83478 9.20594,0.3363 11.96151,0.84209 16.80284,3.08415 15.73824,7.28853 23.26809,21.49668 23.28489,43.936361 l 0.006,7.90821 H 693.83757 659.1435 v 3.97416 c 0,7.41491 3.81627,17.24286 8.52335,21.94994 9.78096,9.78095 29.35268,9.56456 37.75196,-0.4174 2.40124,-2.85373 5.76579,-11.59367 5.76579,-14.97756 0,-1.00884 2.18544,-1.34542 8.73604,-1.34542 h 8.73605 l -0.70589,4.84697 c -2.49119,17.10592 -13.5705,28.78352 -30.76588,32.42723 -8.38737,1.77727 -14.10645,1.77356 -22.32522,-0.0145 z m 35.29879,-64.045531 c -0.0167,-9.74209 -7.40222,-19.78699 -16.32274,-22.20027 -11.01047,-2.97867 -23.47722,0.90665 -28.8215,8.9824 -2.26192,3.41801 -5.87076,13.0684 -5.87076,15.69901 0,0.459371 11.47966,0.835211 25.51035,0.835211 h 25.51034 l -0.006,-3.316351 z m 60.72031,64.524741 c -11.30095,-2.25162 -18.4131,-8.03455 -21.05294,-17.11821 -0.76789,-2.64235 -1.35718,-8.29097 -1.30951,-12.55251 0.14677,-13.12338 5.41274,-20.70478 17.62877,-25.38 7.17252,-2.74501 22.55257,-5.11976 33.30526,-5.14247 4.48983,-0.009 9.94232,-0.31113 12.11665,-0.67032 l 3.95333,-0.65306 -0.69811,-7.754121 c -0.38395,-4.26476 -1.47418,-9.08689 -2.42271,-10.71584 -2.55507,-4.38789 -8.41376,-6.97685 -17.04123,-7.53053 -14.57451,-0.93533 -23.93795,3.76806 -25.45847,12.78818 l -0.73106,4.33676 h -8.70269 -8.7027 l 0.41455,-6.5102 c 0.47151,-7.40513 3.15988,-11.86725 10.23982,-16.99592 8.56266,-6.20277 14.03975,-7.54647 30.91014,-7.58318 12.39585,-0.0269 16.35126,0.33059 20.80228,1.88055 6.95353,2.42139 13.02667,7.8639 16.08278,14.41275 2.32617,4.98472 2.38115,5.80185 2.39091,35.526461 0.006,18.76615 0.40994,31.17176 1.05376,32.37475 1.82968,3.41878 4.55628,4.2079 9.11381,2.6377 l 4.12819,-1.42227 v 6.48713 c 0,6.09659 -0.1747,6.57747 -2.90167,7.98764 -4.26911,2.20766 -12.34417,3.00324 -17.2029,1.69493 -5.10096,-1.37355 -9.14002,-5.80894 -10.09107,-11.08128 -0.37665,-2.08808 -0.85941,-4.10564 -1.07279,-4.48347 -0.21341,-0.37783 -2.79341,1.70623 -5.73337,4.63126 -2.93996,2.92502 -7.43667,6.29377 -9.99267,7.48612 -8.30444,3.87392 -19.75906,5.19559 -29.02636,3.34915 z m 26.72424,-15.85832 c 5.03704,-2.03766 12.11313,-9.17246 14.38664,-14.50598 1.13087,-2.65295 2.21607,-7.34907 2.41152,-10.43582 l 0.35539,-5.61228 -11.73476,0.28463 c -21.8833,0.53079 -31.46408,3.51398 -34.78739,10.83187 -3.37675,7.43559 -1.95696,14.69817 3.58303,18.32811 5.30682,3.47716 18.52668,4.04597 25.78557,1.10947 z m -227.25699,12.55841 c -0.54895,-1.26277 -9.00351,-23.4185 -18.78792,-49.23497 l -17.78977,-46.939031 9.28566,-0.29565 c 6.08374,-0.19369 9.53064,0.10072 9.99609,0.85385 0.39074,0.63222 6.85771,17.63435 14.37107,37.782511 7.51335,20.14817 13.89025,36.63251 14.17086,36.63186 0.28062,-5.3e-4 5.76654,-14.11462 12.19097,-31.36438 6.42441,-17.249781 12.78286,-34.233141 14.12989,-37.740811 l 2.44913,-6.37759 h 8.57432 c 4.71587,0 8.57431,0.32688 8.57431,0.7264 0,0.39952 -8.33566,22.67005 -18.52369,49.490071 l -18.52368,48.76367 h -9.55957 c -8.93763,0 -9.62453,-0.14938 -10.55767,-2.29593 z"
                    id="path1006" />
                </svg>

              </a>
              <ul className="nav me-auto ">
                <li className="nav-item"><a href="/" className="nav-link link-light px-2 active" aria-current="page">Trang Chủ</a></li>
                <div className="dropdown nav-item">
                  <button className="btn btn-secondary dropdown-toggle nav-link link-light px-2 active  bg-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Sản Phẩm
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {
                      ProductOptions.map((option, index) => (
                        <li key={index}><a className="dropdown-item" href={option.href}>{option.text}</a></li>
                      ))
                    }

                  </ul>
                </div>
                <div className="dropdown nav-item">
                  <button className="btn btn-secondary dropdown-toggle nav-link link-light px-2 active bg-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dịch Vụ
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="/service">Đặt lồng chim theo yêu cầu</a></li>
                  </ul>
                </div>
                <li className="nav-item"><a href="/blog" className="nav-link link-light px-2 ">Blog</a></li>
              </ul>
              <ul className="nav">
                {
                  login ?
                    <li className="nav-item"><a href="/login" className="nav-link link-light px-2 py-1">Đăng Nhập</a></li>
                    : <></>
                }
                {
                  signUp ?
                    <li className="nav-item"><a href="/sign-up" className="nav-link link-light px-2  me-2 py-1" >Đăng Ký</a></li>
                    :
                    <></>
                }
              </ul>
            </div>
          </nav>
      }


    </>

  );
}

export default Navbar;
