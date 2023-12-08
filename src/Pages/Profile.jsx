import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar/Navbar2.component";

const Profile = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="bg-[#EEEEEE]">
      <Navbar2 />
      <div className="w-[98vw] h-full flex relative justify-center items-center pb-8">
        <div className="w-[25%] h-[80vh] flex relative justify-center items-center bg-white fixed ">
          <div className="w-[80%] h-[90%] flex flex-col justify-center items-center">
            <img
              src="https://ashisheditz.com/wp-content/uploads/2023/09/profile-picture-cute-whatsapp.jpg"
              alt=""
              className="rounded-full w-28 h-28 "
            />
            <h1 className="text-xl font-normal font-[Inter] text-center pt-3">
              Hello,
            </h1>
            <h1 className="text-2xl font-semiBold font-[Inter] text-center text-[#FF3754]">
              Bhuvana😀
            </h1>
            <div className="h-[60%] flex flex-col relative justify-center items-start">
              <div className="flex relative justify-center items-center pb-4 pt-3">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                  alt="user-male-circle"
                />
                <h1 className="text-xl font-medium pl-10 ">My Profile</h1>
              </div>
              <div className="flex relative justify-center items-center pb-4">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/ingredients-list.png"
                  alt="ingredients-list"
                />
                <h1 className="text-xl font-medium pl-10">My Orders</h1>
              </div>
              <div className="flex relative justify-center items-center pb-4">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-glyphs/30/000/like--v1.png"
                  alt="like--v1"
                />
                <h1 className="text-xl font-medium pl-10">My Wishlist</h1>
              </div>
              <div className="flex relative justify-center items-center pb-4">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/phone.png"
                  alt="phone"
                />
                <h1 className="text-xl font-medium pl-10">Contact Us</h1>
              </div>
              <div className="flex relative justify-center items-center pb-4">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/exit.png"
                  alt="exit"
                />
                <h1 className="text-xl font-medium pl-10">Logout</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%] h-[95%] flex flex-col relative justify-center items-center px-7">
          <h1 className="text-3xl font-medium pb-5 text-left">
            Contact Information
          </h1>
          <div className="w-[80%] h-[80%] bg-white p-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-[100%] pl-4 text-xl h-12 focus border-2 border-gray-600 rounded-sm"
              onChange={(e) => setName(e.target.value)}
            />

            <div className="flex justify-between items-center relative py-5">
              <select
                className="w-[48%] pl-4 text-xl h-12 focus border-2 border-gray-600 rounded-sm pr-5 "
                onSelect={(e) => setCountry(e.target.value)}
              >
                <option value="" selected>
                  -- Select Country --
                </option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antartica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegowina">
                  Bosnia and Herzegowina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo">
                  Congo, the Democratic Republic of the
                </option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                <option value="Croatia">Croatia (Hrvatska)</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands">
                  Falkland Islands (Malvinas)
                </option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="France Metropolitan">
                  France, Metropolitan
                </option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">
                  French Southern Territories
                </option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard and McDonald Islands">
                  Heard and Mc Donald Islands
                </option>
                <option value="Holy See">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran (Islamic Republic of)</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Democratic People's Republic of Korea">
                  Korea, Democratic People's Republic of
                </option>
                <option value="Korea">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">
                  Libyan Arab Jamahiriya
                </option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Macedonia">
                  Macedonia, The Former Yugoslav Republic of
                </option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">
                  Micronesia, Federated States of
                </option>
                <option value="Moldova">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">
                  Netherlands Antilles
                </option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint LUCIA">Saint LUCIA</option>
                <option value="Saint Vincent">
                  Saint Vincent and the Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia (Slovak Republic)</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia">
                  South Georgia and the South Sandwich Islands
                </option>
                <option value="Span">Spain</option>
                <option value="SriLanka">Sri Lanka</option>
                <option value="St. Helena">St. Helena</option>
                <option value="St. Pierre and Miguelon">
                  St. Pierre and Miquelon
                </option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan, Province of China</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos">
                  Turks and Caicos Islands
                </option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">
                  United States Minor Outlying Islands
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Viet Nam</option>
                <option value="Virgin Islands (British)">
                  Virgin Islands (British)
                </option>
                <option value="Virgin Islands (U.S)">
                  Virgin Islands (U.S.)
                </option>
                <option value="Wallis and Futana Islands">
                  Wallis and Futuna Islands
                </option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Serbia">Serbia</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="+91-9940698624"
                className="w-[50%] pl-4 text-xl h-12 focus border-2 border-gray-600 rounded-sm"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <select name="name" className="w-[100%] pl-4 text-xl h-12 focus border-2 border-gray-600 rounded-sm pr-5 " onSelect={(e) => setGender(e.target.value)}>
              <option value="">-- Select Gender --</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
            <div className="h-5"></div>

            <input
              type="text"
              name="pincode"
              id="pincode"
              placeholder="Pincode"
              className="w-[100%] pl-4 text-xl h-12 focus border-2 border-gray-600 rounded-sm"
              onChange={(e) => setPincode(e.target.value)}
            />
            <div className="h-5"></div>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-[100%] pl-4 text-xl h-12 focus border-2 border-gray-600 rounded-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="h-5"></div>
            <button
              type="submit"
              className="bg-[#FF3754] text-xl text-white w-[100%] h-12 "
            >
              {name && country && phone ? (
                <h1>Edit Details</h1>
              ) : (
                <h1>Submit</h1>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
