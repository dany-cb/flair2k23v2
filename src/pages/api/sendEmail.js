import { sendMail } from "@/lib/mailService";
import axios from "axios";
import { Buffer } from "buffer";

const handler = async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        //Do some thing
        // Fetch the screenshot
        const screenshotResponse = await fetch(
          "http://localhost:3000/api/screenshot?url=http://localhost:3000/ticket/cllzfxq6n0015tbhg58t90o54"
        );
        let imageUrl;
        // Check if the response is successful
        if (screenshotResponse.ok) {
          // Convert the response to a blob
          const screenshotBlob = await screenshotResponse.blob();

          // Create a Blob URL from the Blob
          imageUrl = URL.createObjectURL(screenshotBlob);
          console.log(imageUrl, "isjd");
        }
        //     await sendMail(
        //       "TEST",
        //       "crispin.24it@licet.ac.in",
        //       `
        //       <table
        //   width="100%"
        //   border="0"
        //   cellpadding="0"
        //   cellspacing="0"
        //   role="presentation"
        //   style="background-color: #121212"
        // >
        //   <tbody>
        //     <tr>
        //       <td>
        //         <table
        //           align="center"
        //           width="100%"
        //           border="0"
        //           cellpadding="0"
        //           cellspacing="0"
        //           role="presentation"
        //         >
        //           <tbody>
        //             <tr>
        //               <td>
        //                 <table
        //                   class="m_-5569892338745597500row-content m_-5569892338745597500stack"
        //                   align="center"
        //                   border="0"
        //                   cellpadding="0"
        //                   cellspacing="0"
        //                   role="presentation"
        //                   style="color: #000; width: 680px"
        //                   width="680"
        //                 >
        //                   <tbody>
        //                     <tr>
        //                       <td
        //                         class="m_-5569892338745597500column"
        //                         width="100%"
        //                         style="
        //                           font-weight: 400;
        //                           text-align: left;
        //                           padding-bottom: 5px;
        //                           padding-top: 5px;
        //                           vertical-align: top;
        //                           border-top: 0;
        //                           border-right: 0;
        //                           border-bottom: 0;
        //                           border-left: 0;
        //                         "
        //                       >
        //                         <div
        //                           style="
        //                             height: 30px;
        //                             line-height: 30px;
        //                             font-size: 1px;
        //                           "
        //                         >
        //                           &hairsp;
        //                         </div>
        //                       </td>
        //                     </tr>
        //                   </tbody>
        //                 </table>
        //               </td>
        //             </tr>
        //           </tbody>
        //         </table>

        //         <table
        //           align="center"
        //           width="100%"
        //           border="0"
        //           cellpadding="0"
        //           cellspacing="0"
        //           role="presentation"
        //           style="background-color: #121212"
        //         >
        //           <tbody>
        //             <tr>
        //               <td>
        //                 <table
        //                   class="m_-5569892338745597500row-content m_-5569892338745597500stack"
        //                   align="center"
        //                   border="0"
        //                   cellpadding="0"
        //                   cellspacing="0"
        //                   role="presentation"
        //                   style="color: #000; width: 680px"
        //                   width="680"
        //                 >
        //                   <tbody>
        //                     <tr>
        //                       <td
        //                         class="m_-5569892338745597500column"
        //                         width="100%"
        //                         style="
        //                           font-weight: 400;
        //                           text-align: left;
        //                           padding-top: 25px;
        //                           vertical-align: top;
        //                           border-top: 0;
        //                           border-right: 0;
        //                           border-bottom: 0;
        //                           border-left: 0;
        //                         "
        //                       >
        //                         <table
        //                           width="100%"
        //                           border="0"
        //                           cellpadding="0"
        //                           cellspacing="0"
        //                           role="presentation"
        //                         >
        //                           <tbody>
        //                             <tr>
        //                               <td>
        //                                 <div align="center">
        //                                   <table
        //                                     border="0"
        //                                     cellpadding="0"
        //                                     cellspacing="0"
        //                                     role="presentation"
        //                                     width="100%"
        //                                   >
        //                                     <tbody>
        //                                       <tr>
        //                                         <td
        //                                           style="
        //                                             font-size: 1px;
        //                                             line-height: 1px;
        //                                             border-top: 1px solid #bbb;
        //                                           "
        //                                         >
        //                                           <span>&hairsp;</span>
        //                                         </td>
        //                                       </tr>
        //                                     </tbody>
        //                                   </table>
        //                                 </div>
        //                               </td>
        //                             </tr>
        //                           </tbody>
        //                         </table>
        //                         <table
        //                           width="100%"
        //                           border="0"
        //                           cellpadding="10"
        //                           cellspacing="0"
        //                           role="presentation"
        //                           style="word-break: break-word"
        //                         >
        //                           <tbody>
        //                             <tr>
        //                               <td>
        //                                 <div style="font-family: sans-serif">
        //                                   <div
        //                                     style="
        //                                       font-size: 12px;
        //                                       font-family: Montserrat, Trebuchet MS,
        //                                         Lucida Grande, Lucida Sans Unicode,
        //                                         Lucida Sans, Tahoma, sans-serif;
        //                                       color: #fff;
        //                                       line-height: 1.2;
        //                                     "
        //                                   >
        //                                     <p
        //                                       style="
        //                                         margin: 0;
        //                                         font-size: 14px;
        //                                         text-align: center;
        //                                       "
        //                                     >
        //                                       <strong
        //                                         ><span style="font-size: 34px"
        //                                           >Flair 2k23</span
        //                                         ></strong
        //                                       >
        //                                     </p>
        //                                   </div>
        //                                 </div>
        //                               </td>
        //                             </tr>
        //                           </tbody>
        //                         </table>
        //                         <table
        //                           width="100%"
        //                           border="0"
        //                           cellpadding="0"
        //                           cellspacing="0"
        //                           role="presentation"
        //                         >
        //                           <tbody>
        //                             <tr>
        //                               <td>
        //                                 <div align="center">
        //                                   <table
        //                                     border="0"
        //                                     cellpadding="0"
        //                                     cellspacing="0"
        //                                     role="presentation"
        //                                     width="100%"
        //                                   >
        //                                     <tbody>
        //                                       <tr>
        //                                         <td
        //                                           style="
        //                                             font-size: 1px;
        //                                             line-height: 1px;
        //                                             border-top: 1px solid #bbb;
        //                                           "
        //                                         >
        //                                           <span>&hairsp;</span>
        //                                         </td>
        //                                       </tr>
        //                                     </tbody>
        //                                   </table>
        //                                 </div>
        //                               </td>
        //                             </tr>
        //                           </tbody>
        //                         </table>
        //                       </td>
        //                     </tr>
        //                   </tbody>
        //                 </table>
        //               </td>
        //             </tr>
        //           </tbody>
        //         </table>

        //         <table
        //           align="center"
        //           width="100%"
        //           border="0"
        //           cellpadding="0"
        //           cellspacing="0"
        //           role="presentation"
        //           style="background-position: top center"
        //         >
        //           <tbody>
        //             <tr>
        //               <td>
        //                 <table
        //                   class="m_-5569892338745597500row-content m_-5569892338745597500stack"
        //                   align="center"
        //                   border="0"
        //                   cellpadding="0"
        //                   cellspacing="0"
        //                   role="presentation"
        //                   style="color: #000; width: 680px"
        //                   width="680"
        //                 >
        //                   <tbody>
        //                     <tr>
        //                       <td
        //                         class="m_-5569892338745597500column"
        //                         width="100%"
        //                         style="
        //                           font-weight: 400;
        //                           text-align: left;
        //                           padding-bottom: 5px;
        //                           padding-top: 5px;
        //                           vertical-align: top;
        //                           border-top: 0;
        //                           border-right: 0;
        //                           border-bottom: 0;
        //                           border-left: 0;
        //                         "
        //                       >
        //                         <div
        //                           style="
        //                             height: 5px;
        //                             line-height: 5px;
        //                             font-size: 1px;
        //                           "
        //                         >
        //                           &hairsp;
        //                         </div>
        //                         <table
        //                           width="100%"
        //                           border="0"
        //                           cellpadding="0"
        //                           cellspacing="0"
        //                           role="presentation"
        //                           style="word-break: break-word"
        //                         >
        //                           <tbody>
        //                             <tr>
        //                               <td
        //                                 style="
        //                                   padding-bottom: 10px;
        //                                   padding-left: 25px;
        //                                   padding-right: 10px;
        //                                   padding-top: 10px;
        //                                 "
        //                               >
        //                                 <div style="font-family: sans-serif">
        //                                   <div
        //                                     style="
        //                                       font-size: 12px;
        //                                       font-family: Montserrat, Trebuchet MS,
        //                                         Lucida Grande, Lucida Sans Unicode,
        //                                         Lucida Sans, Tahoma, sans-serif;
        //                                       color: #a5adb8;
        //                                       line-height: 1.5;
        //                                       text-align: center;
        //                                     "
        //                                   >
        //                                     <p
        //                                       style="
        //                                         margin: 0;
        //                                         font-size: 14px;
        //                                         text-align: center;
        //                                       "
        //                                     >
        //                                       <span style="font-size: 14px"
        //                                         >We are delighted to have you join
        //                                         us for the Flair 2K23 Symposium.
        //                                         Your registration has been
        //                                         successfully received, and we can't
        //                                         wait to welcome you to this exciting
        //                                         event! Are you ready to showcase
        //                                         your creativity and technical
        //                                         skills?</span
        //                                       >
        //                                     </p>
        //                                     <p style="margin: 0; font-size: 14px">
        //                                       &nbsp;
        //                                     </p>
        //                                     <img
        //                                       src="${imageUrl}"
        //                                       alt="ticket"
        //                                     />
        //                                   </div>
        //                                 </div>
        //                               </td>
        //                             </tr>
        //                           </tbody>
        //                         </table>
        //                       </td>
        //                     </tr>
        //                   </tbody>
        //                 </table>
        //               </td>
        //             </tr>
        //           </tbody>
        //         </table>
        //         <table
        //           align="center"
        //           width="100%"
        //           border="0"
        //           cellpadding="0"
        //           cellspacing="0"
        //           role="presentation"
        //         >
        //           <tbody>
        //             <tr>
        //               <td>
        //                 <table
        //                   class="m_-5569892338745597500row-content m_-5569892338745597500stack"
        //                   align="center"
        //                   border="0"
        //                   cellpadding="0"
        //                   cellspacing="0"
        //                   role="presentation"
        //                   style="color: #000; width: 680px"
        //                   width="680"
        //                 >
        //                   <tbody>
        //                     <tr>
        //                       <td
        //                         class="m_-5569892338745597500column"
        //                         width="100%"
        //                         style="
        //                           font-weight: 400;
        //                           text-align: left;
        //                           padding-bottom: 5px;
        //                           padding-top: 5px;
        //                           vertical-align: top;
        //                           border-top: 0;
        //                           border-right: 0;
        //                           border-bottom: 0;
        //                           border-left: 0;
        //                         "
        //                       >
        //                         <table
        //                           width="100%"
        //                           border="0"
        //                           cellpadding="0"
        //                           cellspacing="0"
        //                           role="presentation"
        //                         >
        //                           <tbody>
        //                             <tr>
        //                               <td
        //                                 style="
        //                                   padding-bottom: 2rem;
        //                                   padding-left: 25px;
        //                                   padding-right: 10px;
        //                                   padding-top: 10px;
        //                                   text-align: center;
        //                                 "
        //                               >
        //                                 <div align="center">
        //                                   <a
        //                                     href="https://flair2k23.vercel.app/ticket/cllzfxq6n0015tbhg58t90o54"
        //                                     style="
        //                                       text-decoration: none;
        //                                       display: inline-block;
        //                                       color: #313a46;
        //                                       background-color: #ffffff;
        //                                       border-radius: 4px;
        //                                       width: auto;
        //                                       border-top: 0px solid #8a3b8f;
        //                                       font-weight: undefined;
        //                                       border-right: 0px solid #8a3b8f;
        //                                       border-bottom: 0px solid #8a3b8f;
        //                                       border-left: 0px solid #8a3b8f;
        //                                       padding-top: 10px;
        //                                       padding-bottom: 10px;
        //                                       font-family: Montserrat, Trebuchet MS,
        //                                         Lucida Grande, Lucida Sans Unicode,
        //                                         Lucida Sans, Tahoma, sans-serif;
        //                                       font-size: 16px;
        //                                       text-align: center;
        //                                       word-break: keep-all;
        //                                     "
        //                                     target="_blank"
        //                                     data-saferedirecturl="https://www.google.com/url?q=https://flair2k23.vercel.app/ticket/cllzfxq6n0015tbhg58t90o54&amp;source=gmail&amp;ust=1694701432254000&amp;usg=AOvVaw2IC1YyKYw6APrJL9Dcxf-2"
        //                                     ><span
        //                                       style="
        //                                         padding-left: 55px;
        //                                         padding-right: 55px;
        //                                         font-size: 16px;
        //                                         display: inline-block;
        //                                         letter-spacing: normal;
        //                                       "
        //                                       ><span
        //                                         dir="ltr"
        //                                         style="
        //                                           word-break: break-word;
        //                                           line-height: 32px;
        //                                           font-weight: bold;
        //                                         "
        //                                         >View ticket!</span
        //                                       ></span
        //                                     ></a
        //                                   >
        //                                 </div>
        //                               </td>
        //                             </tr>
        //                           </tbody>
        //                         </table>
        //                       </td>
        //                     </tr>
        //                   </tbody>
        //                 </table>
        //               </td>
        //             </tr>
        //           </tbody>
        //         </table>
        //       </td>
        //     </tr>
        //   </tbody>
        // </table>
        //        `
        //     );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;
