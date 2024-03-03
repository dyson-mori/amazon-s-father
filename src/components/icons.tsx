import { FC } from "react";

type Props = {
  name: 'zero-risk' | 'sell-more' | 'copy' | 'initial-setup';
}

export const Icons: FC<Props> = ({ name }) => {
  switch (name) {
    case 'zero-risk':
      return (
        <svg width="50" height="54" viewBox="0 0 146 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_33_196)">
            <path
              d="M72.5391 2.34375C114.082 2.34375 145.312 34.5996 145.312 75C145.312 118.096 110.596 147.656 72.5391 147.656C33.2813 147.656 0 115.576 0 75C0 36.0645 30.6738 2.34375 72.5391 2.34375ZM72.7734 15.4395C38.1445 15.4395 13.0957 44.1211 13.0957 75C13.0957 107.168 39.8145 134.414 72.7734 134.414C103.008 134.414 132.188 110.654 132.188 75C132.217 41.6602 105.762 15.4395 72.7734 15.4395ZM72.6562 33.1641C48.6621 33.1641 42.627 55.8105 42.627 75C42.627 94.1895 48.6621 116.836 72.6562 116.836C96.6504 116.836 102.686 94.1895 102.686 75C102.686 55.8105 96.6504 33.1641 72.6562 33.1641ZM72.6562 48.9551C73.623 48.9551 74.5313 49.1016 75.3516 49.3066C77.0801 50.8008 77.9297 52.8516 76.2598 55.7227L60.293 85.0781C59.7949 81.3574 59.7363 77.7246 59.7363 75C59.7363 66.5625 60.3223 48.9551 72.6562 48.9551ZM84.6094 62.4902C85.459 67.002 85.5762 71.6895 85.5762 75C85.5762 83.4668 84.9902 101.045 72.6562 101.045C68.7012 101.045 63.1055 98.7891 66.7676 93.3105L84.6094 62.4902Z"
              fill="#F55D00" />
          </g>
          <defs>
            <clipPath id="clip0_33_196">
              <rect width="145.312" height="150" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'sell-more':
      return (
        <svg width="50" height="50" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M145.312 112.5H18.75V23.4375C18.75 20.8477 16.6523 18.75 14.0625 18.75H4.6875C2.09766 18.75 0 20.8477 0 23.4375V121.875C0 127.052 4.19824 131.25 9.375 131.25H145.312C147.902 131.25 150 129.152 150 126.562V117.188C150 114.598 147.902 112.5 145.312 112.5ZM135.938 28.125H101.35C95.0859 28.125 91.9482 35.6982 96.3779 40.1279L105.87 49.6201L84.375 71.1182L62.8799 49.623C59.2178 45.9609 53.2822 45.9609 49.623 49.623L29.499 69.7471C27.668 71.5781 27.668 74.5459 29.499 76.377L36.126 83.0039C37.957 84.835 40.9248 84.835 42.7559 83.0039L56.25 69.5068L77.7451 91.002C81.4072 94.6641 87.3428 94.6641 91.002 91.002L119.127 62.877L128.619 72.3691C133.049 76.7988 140.622 73.6611 140.622 67.3975V32.8125C140.625 30.2227 138.527 28.125 135.938 28.125Z" fill="#F55D00" />
        </svg>
      );

    case 'copy':
      return (
        <svg width="44" height="50" viewBox="0 0 44 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_74_395)">
            <path d="M42.3771 6.43955L37.3104 1.37295C36.4314 0.493871 35.2391 6.50075e-06 33.9959 0L17.1875 0C14.5986 0 12.5 2.09863 12.5 4.6875V9.375H4.6875C2.09863 9.375 0 11.4736 0 14.0625V45.3125C0 47.9014 2.09863 50 4.6875 50H26.5625C29.1514 50 31.25 47.9014 31.25 45.3125V40.625H39.0625C41.6514 40.625 43.75 38.5264 43.75 35.9375V9.7541C43.75 8.5109 43.2561 7.31862 42.3771 6.43955ZM25.9766 45.3125H5.27344C5.11804 45.3125 4.969 45.2508 4.85912 45.1409C4.74923 45.031 4.6875 44.882 4.6875 44.7266V14.6484C4.6875 14.493 4.74923 14.344 4.85912 14.2341C4.969 14.1242 5.11804 14.0625 5.27344 14.0625H12.5V35.9375C12.5 38.5264 14.5986 40.625 17.1875 40.625H26.5625V44.7266C26.5625 44.882 26.5008 45.031 26.3909 45.1409C26.281 45.2508 26.132 45.3125 25.9766 45.3125ZM38.4766 35.9375H17.7734C17.618 35.9375 17.469 35.8758 17.3591 35.7659C17.2492 35.656 17.1875 35.507 17.1875 35.3516V5.27344C17.1875 5.11804 17.2492 4.969 17.3591 4.85912C17.469 4.74923 17.618 4.6875 17.7734 4.6875H28.125V13.2812C28.125 14.5757 29.1743 15.625 30.4688 15.625H39.0625V35.3516C39.0625 35.507 39.0008 35.656 38.8909 35.7659C38.781 35.8758 38.632 35.9375 38.4766 35.9375ZM39.0625 10.9375H32.8125V4.6875H33.7531C33.9085 4.6875 34.0575 4.74922 34.1675 4.85908L38.8909 9.58252C38.9453 9.63694 38.9885 9.70154 39.0179 9.77263C39.0474 9.84373 39.0625 9.91992 39.0625 9.99687V10.9375Z" fill="#F55D00" />
          </g>
          <defs>
            <clipPath id="clip0_74_395">
              <rect width="43.75" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'initial-setup':
      return (
        <svg width="50" height="50" viewBox="0 0 181 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_24_15)">
            <path d="M176.367 34.7461L157.354 4.39453C155.654 1.66992 152.637 0 149.414 0H31.0547C27.832 0 24.8144 1.66992 23.1152 4.39453L4.10155 34.7461C-5.7129 50.4199 2.98827 72.2168 21.3281 74.707C22.6465 74.8828 23.9941 74.9707 25.3418 74.9707C34.0137 74.9707 41.6894 71.1621 46.9629 65.2734C52.2363 71.1621 59.9414 74.9707 68.584 74.9707C77.2558 74.9707 84.9316 71.1621 90.2051 65.2734C95.4785 71.1621 103.184 74.9707 111.826 74.9707C120.498 74.9707 128.174 71.1621 133.447 65.2734C138.75 71.1621 146.426 74.9707 155.068 74.9707C156.445 74.9707 157.764 74.8828 159.082 74.707C177.48 72.2461 186.211 50.4492 176.367 34.7461ZM155.127 84.375C152.197 84.375 149.297 83.9356 146.484 83.2617V112.5H33.9844V83.2617C31.1719 83.9063 28.2715 84.375 25.3418 84.375C23.584 84.375 21.7969 84.2578 20.0683 84.0234C18.4277 83.7891 16.8164 83.4082 15.2637 82.9688V140.625C15.2637 145.811 19.4531 150 24.6387 150H155.889C161.074 150 165.264 145.811 165.264 140.625V82.9688C163.682 83.4375 162.1 83.8184 160.459 84.0234C158.672 84.2578 156.914 84.375 155.127 84.375Z" fill="#F55D00" />
          </g>
          <defs>
            <clipPath id="clip0_24_15">
              <rect width="180.469" height="150" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )

    default:
      break;
  }
}