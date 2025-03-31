"use strict";(self.webpackChunkhexadash_tailwind=self.webpackChunkhexadash_tailwind||[]).push([[925],{925:(t,e,r)=>{r.d(e,{rQ:()=>i});var n=r(4574),o=r(4394),a=r(9254);const i=n.Ay.div`
  .ant-card-body-p-25{
    .ant-card-body {
      padding: 25px!important;
    }
  }
  .ant-card-body-px-0{
    .ant-card-body {
      padding-left: 0!important;
      padding-right: 0!important;
    }
  }

  .ant-card-body-py-25{
    .ant-card-body {
      padding-top: 25px!important;
      padding-bottom: 25px!important;
    }
  }

  .ant-card-body-p-0{
    .ant-card-body {
      padding: 0!important;
    }
  }

  .ant-card-body-pt-0{
    .ant-card-body {
      padding-top: 0!important;
    }
  }

  .ant-card-body-pb-0{
    .ant-card-body {
      padding-bottom: 0!important;
    }
  }

  .ant-card-head-px-25{
    .ant-card-head {
      padding-left: 25px!important;
      padding-right: 25px!important;
    }
  }
  .ant-card-head-mb-0{
    .ant-card-head {
      margin-bottom: 0 !important;
    }
  }

  .ant-card-body-center{
    .ant-card-body {
      display: flex;
      justify-content: center;
    }
  }
  .ant-card-body-align-center{
    .ant-card-body {
      text-align: center;
    }
  }

  .bg-regularBG-header-bg{
    .ant-card-head{
      background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background-light"]}};
    }
  }

  .ant-card-title-bb-default{··
    .ant-card-head{
      border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
    }
  }

  .ant-card-head-b-none{
    .ant-card-head {
      border:none !important;
    }
  }

  .ant-card-head-title-base{
    .ant-card-head {
      .ant-card-head-title {
        padding: 18px 0;
        font-size: 18px;
        font-weight: 600;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["text-dark"]}};
        @media only screen and (max-width: 575px){
          padding-bottom: 5px;
        }
      }
    }
  }
  .ant-card-title-mb-22 {
    .ant-card-body {
      h1 {
        margin-bottom: 22px;
      }
    }
  }
  
  .ant-card-extra{
    .ant-dropdown-trigger{
      >svg,>img{
        color:${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
        width: 24px;
        height: 24px;
      }
    }
  }

  .ant-dropdown{
    a i, a svg, a img {
        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 8px;
    }
    a {
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    }

      background-color:${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
      border: 0;
      border-radius: 5px;
      box-shadow: 0 5px 20px #9299b820;
      padding:4px 0;
      >a{
          display:flex;
          align-items:center;
          font-weight:400;
          font-size:14px;
          padding:6px 12px;
          color:${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
          transition:0.3s;
          svg{
              color:${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
              width: 14px;
              height: 14px;
              margin-right: 8px;
              transition:0.3s;
          }
          &:hover{
              background: rgba(${t=>{let{theme:e}=t;return e[e.mainContent]["primary-color-rgb"]}},.10);
              color:${t=>{let{theme:e}=t;return e[e.mainContent].primary}};
              svg{
                  color:currentColor;
              }
          }
      }
  }

  .table-responsive {
    .ant-table-tbody > tr > td {
      &.ant-table-column-sort {
        background: transparent;
      }
    }
    .ant-table-thead > tr > th {
      background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-background"]}};
      border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-border"]}};
      background:transparent;
    }
    .ant-table-tbody > tr:hover > td {
      background-color: transparent !important;
    }
  }

  .table-bg-transparent {
    .ant-table-wrapper {
      .ant-table {
        background: transparent;
      }
    }
  }

  .table-pl-0{
    tbody{
      tr{
        td{
          &:first-child{
            ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 0 !important;
          }
        }
      }
    }
  }

  .table-pr-0{
    tbody{
      tr{
        td{
          &:last-child{
            padding-right: 0 !important;
          }
        }
      }
    }
  }

  .table-pt-15{
    tbody{
      tr{
        &:first-child{
          td{
            padding-top: 15px !important;
          }
        }
      }
    }
  }

  .table-pt-8{
    tbody{
      tr{
        &:first-child{
          td{
            padding-top: 8px !important;
          }
        }
      }
    }
  }

  .table-head-none {
    table {
      thead {
        display: none;
      }
    }
  }

  .table-head-rounded {
    table {
      thead {
        > tr {
          &:first-child {
            th {
              &:first-child {
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
              }
              &:last-child {
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
              }
            }
          }
        }
      }
    }
  }

  .table-th-border-none {
    thead {
      tr {
        th {
          border: none;
        }
      }
    }
  }

  .table-th-shape-none {
    thead {
      th {
        &:before {
          display: none;
        }
      }
    }
  }

  .table-th-text-light {
    thead {
      th {
        color: ${t=>{let{theme:e}=t;return e["light-color"]}};
      }
    }
  }

  .table-last-th-text-right {
    thead {
      th {
        &:last-child {
          text-align: right;
        }
      }
    }
  }

  .table-tr-px-30 {
    table {
      tr {
        th,
        td {
          &:first-child {
            padding-left: 30px !important;
          }
          &:last-child {
            padding-right: 30px !important;
          }
        }
      }
    }
  }
  .table-border-b-none{
    tbody{
      tr{
        &:last-child{
          td{
            border-bottom: none;
          }
        }
      }
    }
  }

  .table-td-border-none {
    tbody {
      tr {
        td {
          border: none;
        }
      }
    }
  }

  .table-td-text-body dark:text-white60 {
    tbody {
      tr {
        td {
          color: ${t=>{let{theme:e}=t;return e["gray-color"]}};
        }
      }
    }
  }

  .table-last-td-text-right {
    tbody {
      tr {
        td {
          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }

  .table-selection-col-pl-25 {
    table {
      tr {
        .ant-table-selection-column {
          padding-left: 25px;
        }
      }
    }
  }

  .table-tr-selected-background-transparent {
    tbody {
      tr.ant-table-row-selected {
        td {
          background: transparent;
        }
      }
    }
  }

  .table-tr-hover-shadow {
    tbody {
      tr {
        &:hover {
          box-shadow: 0px 10px 15px rgba(116,116,116,0.08);
        }
      }
    }
  }

  .svg-w-h-10{
    svg{
      width: 10px;
      height: 10px;
    }
  }

  .svg-w-full{
    svg{
      width: 100%;
      height: 100%;
    }
  }

  .inside-flex-align-center{
    >div{
      display:flex;
      align-items:center;
    }
  }

  .ant-btn-loading-icon{
    .ant-btn-loading-icon{
      display:flex;
      align-items:center;
    }
  }

  .anticon svg {
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-color"]}};
  }

  .ant-progress-status-success {
    .anticon svg {
      color: ${t=>{let{theme:e}=t;return e["success-color"]}};
    }
  }

  .progress-text-body dark:text-white60 {
    .ant-progress-text {
      color: ${t=>{let{theme:e}=t;return e["gray-color"]}};
    }
  }

  .custom-radio-group {
    .ant-radio-checked {
      .ant-radio-inner {
        border-width: 4px;
        &:after {
          background: ${t=>{let{theme:e}=t;return e["white-color"]}};
        }
      }
    }
  }

  .form-label-w-full {
    .ant-form-item-row {
      flex-direction: column;
    }
  }

  .form-label-text-left {
    .ant-form-item-label {
      text-align: left;
    }
  }

  .form-label-text-dark {
    .ant-form-item-label label {
      color: ${t=>{let{theme:e}=t;return e["dark-color"]}};
    }
  }

  .form-label-text-semibold {
    .ant-form-item-label label {
      font-weight: 600;
    }
  }

  .checkbox-label-w-full {
    label {
      margin-right: 0;
      span {
        &:not(:first-child){
          display: inline-flex;
          justify-content: space-between;
          align-items: center;
          flex: 1;
        }
      }
    }
  }

  .custom-filter-rating {
    .ant-checkbox-wrapper {
      align-items: center;
      .ant-rate {
        margin-right: 10px;
        li {
          margin-right: 2px;
          svg {
            color: ${t=>{let{theme:e}=t;return e["warning-color"]}};
          }
        }
      }
    }
  }

`;n.Ay.div`
  .testimonial-custom-style {
    direction: ltr;
    .swiper-button-prev,
    .swiper-button-next{
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      transform: translateY(-80%);
      z-index: 22;
      background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
    }
    .swiper-button-prev{
      left: 0;
      &:before{
        font-family: 'Jost', sans-serif;
        content: url('${r(4666)}');
      }
    }
    .swiper-button-next{
      right: 0;
      &:before{
        font-family: 'Jost', sans-serif;
        content: url('${r(4612)}');
      }
    }
    .theme-1 {
      .swiper-container {
        padding: 40px 19px 60px;
        .swiper-slide {
          box-shadow: rgb(116 116 116 / 6%) 0px 10px 20px;
          &.swiper-slide-active {
            box-shadow: rgb(116 116 116 / 13%) 0px 20px 50px;
          }
        }
      }
    }
  
    .theme-3 {
      .swiper-pagination {
        position: absolute;
        height: fit-content;
        top: 45px;
        left: 50%;
        transform: translateX(-50%);
      }
  
      .swiper-pagination {
        .pagination-thumb {
          &.swiper-pagination-bullet-active {
            position: relative;
            z-index: 22;
            opacity: 1 !important;
            img {
              transform: scale(1.4);
            }
          }
        }
      }
    }

    .theme-4 {
      .swiper-button-prev {
        left: 100px;
      }
      .swiper-button-next {
        right: 100px;
      }
    }
    
    .swiper-container {
      list-style: none;
      margin-left: auto;
      margin-right: auto;
      padding: 0 20px;
      margin: 0 -20px;
      overflow: hidden;
      position: relative;
      z-index: 1;
    }
    
    .swiper-pagination {
      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background-color: rgb(220, 221, 250);
        opacity: 1;
        &.swiper-pagination-bullet-active {
          background-color: rgb(130, 49, 211);
        }
      }
    }
  
    .swiper-button-prev,
    .swiper-button-next {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      box-shadow: rgb(10 10 10 / 9%) 0px 3px 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      transform: translateY(-80%);
      z-index: 22;
      background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-color"]}} ;
    }
    .swiper-button-next {
      right: 10px;
    }
  }
  
`,n.Ay.div`
  .ant-card-custom-style {
    border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["light-border"]}} !important;
    .ant-collapse-header {
      padding: 18px 20px !important;
      background-color:${t=>{let{theme:e}=t;return e[e.mainContent]["white-color"]}};
      svg {
        width: 16px;
        height: 16px;
      }
    }
    .ant-collapse-content {
      .ant-collapse-content-box {
        padding-top: 0;
      }
    }
  }
`,n.Ay.div`
  .ant-pagination-custom-style {
    .ant-pagination {
      li {
        a {
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
        }
        .ant-pagination-item-link {
          display: flex;
          align-items: center;
          justify-content: center;  
          border:none;
          .anticon svg {
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
          }
        }
        &.ant-pagination-item-active {
          background: ${t=>{let{theme:e}=t;return e[e.mainContent].primary}};
          a {
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-text"]}};
          }
        }
        &.ant-pagination-options{
          display: inline-flex;
          align-items: center;
          border: none;
          .ant-select-selection-item{
            display: inline-flex;
            align-items: center;
          }
        }
      }
    }
    .ant-pagination-options {
      .ant-select-selection-item,
      .ant-select-arrow span svg {
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
      }
      .ant-select-selector {
        padding: 0 7px;
        height: 32px;
        .ant-select-selection-item {
          font-size: 13px;
          line-height: 32px;
        }
      }
      .ant-select-arrow {
        span {
          line-height: 10px;
          svg {
            width: 10px;
          }
        }
      }
    }
    .ant-select-item-dropdown-option-dark {
      .ant-select-item-option-content {
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
      }
      .ant-select-item.ant-select-item-option-selected {
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent].primary}}06;
        .ant-select-item-option-content {
          color: ${t=>{let{theme:e}=t;return e[e.mainContent].primary}};
          font-weight: 500;
          padding-left: 10px;
        }
      }
    }
  }
`,n.Ay.div`
    .custom-knowledgebadge-search-form{
        .ant-select {
            min-width: 160px;
            .ant-select-selector {
                .ant-select-selection-search {
                    right: 35px;
                    .ant-select-selection-search-input {
                        height: 54px;
                    }
                }
            }
        }

        .ant-form-item-control-input {
            font-size: 15px;
            color: rgb(134, 142, 174);
            height: 54px;
            .ant-input {
                line-height: 2;
                background-color: rgb(255, 255, 255);
            }
        }

        .hexadash-knowledgetop__formInner{
            .ant-form-item{
                margin-bottom: 0;
                @media only screen and (max-width: 575px){
                    width: 100%;
                }
            }
            .ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
                height: 54px !important;
                border: 0 none;
                background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};
                border-radius: 6px 0 0 6px !important;
                @media only screen and (max-width: 575px){
                    border-radius: 6px !important;
                }
            }
            .ant-select{
                min-width: 160px;
                .ant-select-arrow{
                    ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 30px;
                    @media only screen and (max-width: 575px){
                        top: 40%;
                    }
                }
            }
            .ant-select-selector{
                @media only screen and (max-width: 575px){
                    width: calc(100% - 22px);
                    position: relative;
                    ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 11px;
                    border-radius: 4px;
                    border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}} !important;
                    margin-bottom: 15px;
                }
                .ant-select-selection-search{
                    
                    .ant-select-selection-search-input{
                        height: 54px;
                    }
                }
                .ant-select-selection-item{
                    font-size: 15px;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                    text-align: ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}};
                    line-height: 54px !important;
                    ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
                    @media only screen and (max-width: 575px){
                        ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 0px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
                    }
                }
            }
            .hexadash-search-input{
                width: 100%;
                .ant-form-item-control{
                    @media only screen and (max-width: 575px){
                        padding: 0 11px;
                    }
                }
                .ant-form-item-control-input{
                    font-size: 15px;
                    color: #868EAE;
                    height: 54px;
                    @media only screen and (max-width: 575px){
                        border-radius: 4px;
                        border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
                        margin-bottom: 15px;
                    }
                    @media only screen and (max-width: 575px){
                        border: 0 none;
                    }
                }
                .ant-input{
                    line-height: 2;
                    border: 0 none;
                    border-radius: 0px;
                    background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};
                    @media only screen and (max-width: 575px){
                        border-radius: 6px;
                        border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
                    }
                    &:focus{
                        outline: none;
                        box-shadow: 0 0;
                    }
                }
            }
            .btn-search{
                font-size: 15px;
                height: 54px;
                border-radius: 0 6px 6px 0;
                border-radius: ${t=>{let{theme:e}=t;return e.rtl?"4px 0 0 4px":"0 4px 4px 0"}};
                padding: 6.4px 27.7px;
                @media only screen and (max-width: 575px){
                    border-radius: 4px;
                }
            }
        }
    }
    .hexadash-knowledgetop__popular--topics{
        margin-top: 22px;
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin: -6px 0;
        }
        li{
            margin: 6px 0;
            @media only screen and (max-width: 379px){
                flex: 100%;
                width: 100%;
            }
            &:first-child{
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 25px !important;
                @media only screen and (max-width: 379px){
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 0px !important;
                }
                
            }
            &:not(:last-child){
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 20px;
                @media only screen and (max-width: 379px){
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 0px;
                }
            }
            a,
            span{
                font-size: 14px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            }
            a{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-gray-color"]}} !important;
                transition: .35s;
                &:hover{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                    text-decoration: underline;
                }
            }
        }
    }
`,n.Ay.div`
  .changelog-accordion{
    .ant-collapse-item{
      &:not(:last-child){
        margin-bottom: 20px;
      }
      &:last-child{
        border-radius: 6px;
        .ant-collapse-header{
          border-radius: 6px;
        }
      }
    }
    .ant-collapse-header{
      border-radius: 6px;
      padding: 20px 30px 18px 30px !important;
      @media only screen and (max-width: 480px){
        padding: 20px 15px 18px 15px !important;
      }
      .ant-collapse-arrow{
        position: static;
        top: 0 !important;
        svg,
        img{
          width: 8px;
          font-size: 8px;
        }
      }
    }
    .ant-collapse-content{
      border-radius: 0 0 6px 6px;
      border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-border"]}};
      > .ant-collapse-content-box{
        padding: 30px 30px 25px;
        @media only screen and (max-width: 480px){
          padding: 30px 15px 25px;
        }
      }
    }
  }
`,n.Ay.div`
/* Ant Collapse */
  .ant-collapse{
    background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
    border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
    border-radius: 5px;
  }
  .ant-collapse.ant-collapse-icon-position-left .ant-collapse-header{
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
      padding: 12px 16px 10px 45px;
      background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-background"]}};
  }
  .ant-collapse-content p{
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
      margin-bottom: 0;
  }
  .ant-collapse-content > .ant-collapse-content-box {
      padding: 20px 20px 12px;
  }
  .ant-collapse-content > .ant-collapse-content-box .ant-collapse-content-box{
      padding: 10.5px 20px;
  }
  .ant-collapse > .ant-collapse-item,
  .ant-collapse .ant-collapse-content{
      border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
  }
  .ant-collapse > .ant-collapse-item.ant-collapse-item-disabled .ant-collapse-header{
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}} !important;
  }
  .ant-collapse > .ant-collapse-item .ant-collapse-header{
    align-items: center;
  }
  .ant-collapse > .ant-collapse-item .ant-collapse-header .ant-collapse-arrow{
      font-size: 8px;
  }

  .ant-collapse .ant-collapse {
      border: 0 none;
      background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-text"]}};
  }

  .ant-collapse .ant-collapse > .ant-collapse-item {
      border-bottom: 0;
  }
  .ant-collapse .ant-collapse .ant-collapse-header{
      border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
      background: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-background"]}};
  }
  .ant-collapse .ant-collapse .ant-collapse-content{
      margin: 20px 0 10px 0;
      border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
      border-radius: 0;
  }
  .ant-collapse{
    .ant-collapse-item{
      &:last-child{
        &.ant-collapse-item-disabled{
          background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-background"]}};
        }
      }
      .ant-collapse-item{
        &:last-child{
          background-color:transparent;
        }
        .ant-collapse-header{
          border-radius: 6px;
          border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-border"]}};
          background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-background"]}};
        }
        .ant-collapse-content{
          border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-border"]}};
        }
      }
    }
    .ant-collapse-expand-icon{
      display: flex;
      svg{
        width: 12px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
      }
    }
  }
  
`,n.Ay.div`
  /* Ant Comment */
  .ant-comment-inner{
      padding: 0;
  }
  .ant-comment-content-detail p{
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
  }
  .ant-list-items{
      padding-top: 22px;
  }
  .ant-list-items li:not(:last-child){
      margin-bottom: 22px;
  }
  .ant-comment:not(:last-child){
      margin-bottom: 22px;
  }
  .ant-comment-nested{
      margin-top: 22px;
  }
  .ant-comment-actions li span{
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light"]}};
   + span{
    padding-inline-start: 6px !important;
    padding-inline-end: 0 !important;
   }
  }
  .ant-comment-content-detail textarea{
      resize: none;
      min-height: 170px;
      border-radius: 5px;
  }
  .ant-comment-content-author-time{
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
  }
  // Ant comment action
  .ant-comment-actions{
      li{
          position: relative;
          &:not(:last-child){
              margin-inline-end: 8px;
              padding-inline-end: 8px;
              &:after{
                  position: absolute;
                  inset-inline-end:0;
                  top: 50%;
                  transform: translateY(-50%);
                  width: 1px;
                  height: 12px;
                  background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-deep"]}};
                  content: '';
              }
          }
          .com-time{
              cursor: default;
          }
          span{
            margin-inline-end: 0;
          }
      }
  }
  .ant-list-split .ant-list-header {
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-border"]}};
  }
  .ant-comment-actions li {
      margin-bottom: 0!important;
  }
  .ant-comment-actions>li {
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    display: inline-block;
}
`,(0,n.Ay)(o.A)`
  border-radius: ${t=>{let{shape:e}=t;return e?"40px":"4px"}} !important;
  border-width: 0 !important;
  margin: 0!important;
  padding: 16.5px 20px!important;
  .ant-alert-message{
    line-height: 1.8;
    margin-bottom: 0 !important;
    font-size: 16px !important;
    font-weight: 500 !important;
  }
  &.ant-alert-with-description{
    .ant-alert-content{
      line-height: 1;
    }
    .ant-alert-message{
      margin-bottom: 10px !important;
      line-height: 1;
    }
    .ant-alert-description{
      font-size: 15px;
      line-height: 1.35;
    }
  }
  &.ant-alert-closable {
    .ant-alert-message{
      display: block;
    }
  }
  .ant-alert-message, 
  .ant-alert-description {
    color: ${t=>{let{type:e,theme:r}=t;return r[`${e}-color`]}};
  }
  &.ant-alert-with-description{
    .ant-alert-message{
      color: ${t=>{let{type:e,theme:r}=t;return r[`${e}-color`]}};
    }
  }
  .ant-alert-close-text{
    font-size: 12px;
    line-height: 1.5;
    font-weight: 500;
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
  }

  ${t=>{let{showIcon:e,theme:r}=t;return e&&`padding: 16px 20px 20px!important;\n    alert-empty-message{\n      padding: 11px 40px 11px!important;\n    }\n    .ant-alert-icon{\n      top: 20px !important;\n      ${r.rtl?"right":"left"}: 15px !important;\n    }\n    .ant-alert-message{\n      margin-top: -2px;\n    }\n    i.ant-alert-icon {\n      color: ${t=>{let{type:e}=t;return r[`${e}-color`]}} !important;\n      background: #ffffff80 !important;\n      height: 100%;\n      width: 50px;\n      position: absolute;\n      top: 0;\n      ${r.rtl?"right":"left"}: 0;\n    }`}}


  .ant-alert-close-icon {
    top: 12px !important;
    ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 20px !important;
    svg,
    span,
    img,
    i{
      width: 8px;
      height: 8px;
    }
  }
`,(0,n.Ay)(a.A)`
    display: block !important;
    .ant-select-selection-placeholder{
        padding: 0 20px !important;
        text-align: ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}};
        ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 2px !important;
    }
    &.ant-select{
        .ant-select-selector{
            display: flex;
            align-items: center;
            height: 37px;
            border-radius: 4px;
            padding: 0 !important;
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
            border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}} !important;
            .ant-select-selection-search{
                .ant-input-affix-wrapper{
                    padding: 0 20px;
                    background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                    border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                    input{
                        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                    }
                }
                .ant-input-suffix{
                    svg,
                    i{
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
                    }
                }
            }
            textarea{
                background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
            }
        }
    }
    
    .ant-select-selector input{
        height: 33px !important;
        ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 0 !important;
    }
    .ant-select-selection-search{
        ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 20px;
        width: auto;
        @media only screen and (max-width: 575px){
            width: 100% !important;
        }
        textarea.ant-input{
            padding: 12px 20px;
        }
    }
    .ant-input-affix-wrapper{
        padding: 0 20px;
        input{
            height: 38px !important;
        }
        .ant-input-suffix{
            height: auto;
            border-radius: ${t=>{let{theme:e}=t;return e.rtl?"4px 0 0 4px":"0 4px 4px 0"}}; 
            svg,
            i{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
            }
            .search-btn{
                height: 38px;
                border-radius: 0px 4px 4px 0px;
                svg,
                i{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-color"]}} !important;
                }
            }
        }
    }
`,n.Ay.div`
    .hexadash-calendar-with-head{
      .react-calendar{
        padding: 0;
        margin-bottom: 0;
      }
    }
    .hexadash-calendar-wrap{
      .react-calendar{
        padding: 30px 25px 20px;
      }
      .react-calendar__month-view__days .react-calendar__tile{
        height: 46px !important;
        @media only screen and (max-width: 767px){
          height: 42px !important;
        }
      }
      .ninjadasgcaled {
        @media only screen and (max-width: 1199px){
          min-height: 750px;
        }
      }
    }
    .react-calendar{
        font-family: 'Jost', sans-serif;
        width: 100%;
        border-radius: 10px;
        border: 0 none;
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        margin-bottom: 25px;
        box-shadow: 0 5px 20px ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}}03;
        @media only screen and (max-width: 1599px){
            padding: 40px 35px 50px;
        }
        @media only screen and (max-width: 575px){
            padding: 15px;
        }
        .react-calendar__viewContainer{
            .react-calendar__year-view__months__month {
                &:hover{
                    background-color: transparent;
                }
                &.react-calendar__tile--hasActive{
                    background-color: transparent;
                    color: ${t=>{let{theme:e}=t;return e["primary-color"]}}
                }
            }
        }
    }
    .react-calendar__navigation{
        justify-content: center;
        margin-bottom: 22px;
        height: auto;
        button{
          background-color: transparent !important;
          color: color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
        .react-calendar__navigation__arrow{
            font-size: 20px;
            min-width: auto;
            color: color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
        .react-calendar__navigation__label{
            flex-grow: 0 !important;
            font-size: 16px;
            font-weight: 500;
            margin: 0 15px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
            &:hover{
              background-color: transparent
            }
        }
    }
    .react-calendar__month-view__weekdays{
        .react-calendar__month-view__weekdays__weekday{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: .8rem .5rem;
            abbr{
                font-size: 13px;
                font-weight: 500;
                text-decoration: none;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
                @media only screen and (max-width: 1300px){
                    font-size: 11px;
                }
            }
        }
    }
    .react-calendar__year-view__months,
    .react-calendar__month-view__days{
        .react-calendar__tile{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 64px !important;
            padding: 1em 0.5em;
            @media only screen and (max-width: 1599px){
              height: auto !important;
            }
            &:hover{
                background-color: transparent;
                font-weight: 500;
                color: color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
            }
            &.react-calendar__month-view__days__day--neighboringMonth{
                abbr{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
                }
            }
            abbr{
                font-size: 12px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            }
            &.react-calendar__tile--now{
                padding: 0.929em 0.5em;
                background-color: transparent;
                border-radius: 6px;
                border: 1px solid ${t=>{let{theme:e}=t;return e["primary-color"]}};
            }
            &.react-calendar__tile--active{
                border-radius: 6px;
                border-color:#8e1dce;
                background-color: #8e1dce;
                abbr{
                    color: #ffffff;
                }
            }
        }
    }
    .calendar-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
        @media only screen and (max-width: 1599px){
            flex-flow: column;
        }
        .calendar-header__left{
            display: flex;
            align-items: center;
            position: relative;
            @media only screen and (max-width: 1599px){
                margin-bottom: 20px;
            }
            @media only screen and (max-width: 479px){
                flex-flow: column;
            }
            .btn-today{
                font-size: 14px;
                font-weight: 500;
                height: 34px;
                padding: 0 15px;
                border-radius: 4px;
                text-transform: capitalize;
                cursor: pointer;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                @media only screen and (max-width: 479px){
                    margin-bottom: 15px;
                }
            }
            .react-calendar{
                ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 30px;
                padding: 0;
                border: none;
                .react-calendar__navigation{
                    align-items: center;
                    margin: 0;
                    border: none;
                    .react-calendar__navigation__label{
                        padding: 0 20px;
                    }
                    .react-calendar__navigation__arrow {
                        border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                        border-radius: 5px;
                        width: 34px;
                        height: 34px;
                        svg,
                        img{
                            width: 14px;
                        }
                    }
                }
                .react-calendar__viewContainer{
                    position: absolute;
                    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                    z-index: 999;
                    border: 1px solid #ddd;
                    display: none;
                    &.show{
                        display: block;
                    }
                }
            }
            .calender-head__navigation{
                display: flex;
                align-items: center;
                ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 30px;
                @media only screen and (max-width: 479px){
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 0px;
                }
                .btn-navigate{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 34px;
                    height: 34px;
                    padding: 0;
                    cursor: pointer;
                    border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                    background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                    i,
                    svg{
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
                    }
                }
                .date-label{
                    display: inline-block;
                    margin: 0 20px;
                    font-size: 16px;
                    font-weight: 500;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                    @media only screen and (max-width: 575px){
                      font-size: 12px;
                    }
                }
            }
        }
        .calendar-header__right{
            display: flex;
            @media only screen and (max-width: 479px){
                flex-flow: column;
                align-items: center;
            }
            svg{
                width: 14px;
            }
            ul{
                margin-bottom: 0;
                li{
                    display: inline-block;
                    &:first-child{
                        ${t=>{let{theme:e}=t;return e.rtl?"border-right":"border-left"}}: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                    }
                    &:not(:first-child){
                        a{
                            ${t=>{let{theme:e}=t;return e.rtl?"border-top-right-radius":"border-top-left-radius"}}: 0px;
                            ${t=>{let{theme:e}=t;return e.rtl?"border-bottom-right-radius":"border-bottom-left-radius"}}: 0px;
                        }
                    }
                    &:not(:last-child){
                        a{
                            ${t=>{let{theme:e}=t;return e.rtl?"border-top-left-radius":"border-top-right-radius"}}: 0px;
                            ${t=>{let{theme:e}=t;return e.rtl?"border-bottom-left-radius":"border-bottom-right-radius"}}: 0px;
                        }
                    }
                    a{
                        font-size: 13px;
                        font-weight: 500;
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
                        border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                        ${t=>{let{theme:e}=t;return e.rtl?"border-right":"border-left"}}: 0px;
                        display: block;
                        border-radius: 4px;
                        padding: 6px 13.24px;
                        &.active{
                            color: #fff;
                            border-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                            background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                        }
                    }
                }
            }
            .schedule-list{
                margin-left: 20px;
                ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 20px;
                display: flex;
                align-items: center;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
                @media only screen and (max-width: 479px){
                    margin: 15px 0 0 0;
                }
                svg,
                img,
                i{
                    margin-right: 6px;
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 6px;
                    color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                }
                &.active{
                    color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                }
            }
        }
    }

    .table-event{
        
        border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        &.table-responsive{
            @media only screen and (max-width: 1599px){
                display: block;
                width: 100%;
                overflow-x: auto;
            }
        }
        tr{
            th,
            td{
                padding: 16px 0;
                border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                &:first-child{
                    min-width: 75px;
                    padding: 16px 18px 16px 18px;
                    ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 1px solid color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                    
                }
            }
        }
        thead{
            th{
                padding: 0 22px;
                background-color: ${t=>{let{theme:e}=t;return e["bg-color-light"]}};
                p{
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 0;
                }
            }
        }
        tbody{
            td{
                padding: 0 10px;
                font-size: 12px;
                min-width: 140px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
                .currentTime{
                    width: calc(100% + 20px);
                    height: 1px;
                    display: block;
                    position: relative;
                    ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: -10px;
                    z-index: 222;
                    &:after{
                        position: absolute;
                        left: 0;
                        ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0px;
                        top: -6px;
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        content: '';
                        background-color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
                    }
                }
                .day-event-item{
                    width: 100%;
                    display: block;
                    border-radius: 3px 6px 6px 3px;
                    padding: 6px 12px;
                    margin: 2px 0;
                    position: relative;
                    &:after{
                        position: absolute;
                        left: 0;
                        ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0px;
                        bottom: 0;
                        width: 2px;
                        height: 100%;
                        border-radius: 6px 0 0 6px;
                        content: '';
                    }
                    &.primary{
                        background-color: #EFEFFE;
                        color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                        &:hover{
                            color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                        }
                        &:after{
                            background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                        }
                    }
                    &.secondary{
                        background-color: #FFF0F6;
                        color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
                        &:hover{
                            color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
                        }
                        &:after{
                            background-color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
                        }
                    }
                    &.success{
                        background-color: #E8FAF4;
                        color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                        &:after{
                            background-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                        }
                    }
                    &.warning{
                        background-color: #FFF3E6;
                        color: ${t=>{let{theme:e}=t;return e["warning-color"]}};
                        &:after{
                            background-color: ${t=>{let{theme:e}=t;return e["warning-color"]}};
                        }
                    }
                    &.info{
                        background-color: ${t=>{let{theme:e}=t;return e["info-color"]}}10;
                        color: ${t=>{let{theme:e}=t;return e["info-color"]}};
                        &:after{
                            background-color: ${t=>{let{theme:e}=t;return e["info-color"]}};
                        }
                    }
                    .event-title{
                        display: block;
                        font-size: 13px;
                        font-weight: 500;
                        margin-bottom: 4px;
                    }
                }
            }
            
        }
    }

    .emptyData{
        min-height: 110px;
        font-size: 18px;
        align-items: center;
        justify-content: center;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
    }

    .event-week{
        tr{
            th,
            td{
                &:not(:last-child){
                    ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 1px solid color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                }
            }
        }
        thead{
            tr{
                th{
                    text-align: center;
                    .week-dayName{
                        font-size: 13px;
                        font-weight: 400;
                        margin-bottom: 2px;
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
                    }
                    .week-date{
                        display: inline-block;
                        line-height: 1.45;
                        border-radius: 9px;
                        font-size: 13px;
                        &.primary{
                            padding: 0 10px;
                        }
                    }
                }
            }
        }
        tbody{
            .ant-dropdown-trigger{
                display: inline-block;
            }
        }
    }

    .schedule-event{
        tr{
            &:hover{
                box-shadow: 0 15px 40px ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}}15;
                td{
                    border-color: #fff;
                }
            }
            td{
                padding: 10px 20px !important;
                vertical-align: top;
                font-size: 14px;
                &:first-child{
                    ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 0 none;
                }
                &.schedule-time{
                    direction: ltr;
                    min-width: 100px;
                    width: 130px;
                }
                .ant-row{
                    &:not(:last-child){
                        margin-bottom: 10px;
                    }
                }
                .schedule-date{
                    font-weight: 500;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                }
                .schedule-date-name{
                    margin-left: 10px;
                }
                .event-title{
                    font-weight: 500;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                    @media only screen and (max-width: 575px){
                        display: inline-block;
                        margin-top: 6px; 
                    }
                }
                .schedule-time{
                    font-size: 13px;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
                }
            }
        }
    }

    .events{
        li{
            position: relative;
            min-height: 35px;
            a{
                position: absolute;
                top: 0;
                left: 0;
                ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0;
                padding: 5px 12px;
                z-index: 1;
                border-radius: 4px;
                font-size: 13px;
                &:hover{
                    color: #fff;
                }
            }
        }
    }

    .ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-content {
        overflow-y: unset;
        overflow-x: auto;
    }  
    .rbc-btn {
        color: inherit;
        font: inherit;
        margin: 0;
      }
      button.rbc-btn {
        overflow: visible;
        text-transform: none;
        -webkit-appearance: button;
        cursor: pointer;
      }
      button[disabled].rbc-btn {
        cursor: not-allowed;
      }
      button.rbc-input::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
      .rbc-calendar {
        box-sizing: border-box;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 25px;
        border-radius: 10px;
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        @media only screen and (max-width: 575px){
          padding: 10px;
        }
      }
      .rbc-calendar *,
      .rbc-calendar *:before,
      .rbc-calendar *:after {
        box-sizing: inherit;
      }
      .rbc-abs-full,
      .rbc-row-bg {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .rbc-ellipsis,
      .rbc-event-label,
      .rbc-row-segment .rbc-event-content,
      .rbc-show-more {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .rbc-rtl {
        direction: rtl;
      }
      .rbc-header {
        overflow: hidden;
        flex: 1 0 0%;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 16px 20px;
        text-align: center;
        vertical-align: middle;
        font-size: 15px;
        min-height: 0;
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background"]}};
        @media only screen and (max-width: 575px){
          padding: 10px;
        }
        &:first-child{
          border-radius: 10px 0 0 0;
        }
        &:last-child{
          border-radius: 0 10px 0 0;
        }
        span{
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
          @media only screen and (max-width: 575px){
            font-size: 12px;
          }
        }
      }
      .rbc-rtl .rbc-header + .rbc-header {
        border-left-width: 0;
        border-right: 1px solid #ddd;
      }
      .rbc-header > a,
      .rbc-header > a:active,
      .rbc-header > a:visited {
        color: inherit;
        text-decoration: none;
        display: inline-block;
        padding-bottom: 7px;
      }
      .rbc-row-content {
        position: relative;
        user-select: none;
        z-index: 4;
        .rbc-row{
          &+.rbc-row{
            margin-top: 6px;
          }
        }
      }

      .rbc-event {
        border: none;
        box-shadow: none;
        margin: 0;
        padding: 3px 15px;
        color: #fff;
        cursor: pointer;
        width: 100%;
        text-align: left;
        border-radius: 4px;
        @media only screen and (max-width: 575px){
          font-size: 12px;
        }
        &.primary{
          background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
        }
        &.secondary{
          background-color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
        }
        &.info{
          background-color: ${t=>{let{theme:e}=t;return e["info-color"]}};
        }
        &.warning{
          background-color: ${t=>{let{theme:e}=t;return e["warning-color"]}};
        }
        &.success{
          background-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
        }
      }
      .rbc-slot-selecting .rbc-event {
        cursor: inherit;
        pointer-events: none;
      }
      .rbc-event-label {
        font-size: 80%;
      }
      .rbc-event-overlaps {
        box-shadow: -1px 1px 5px 0px rgba(51, 51, 51, 0.5);
      }
      .rbc-event-continues-prior {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      .rbc-event-continues-after {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .rbc-event-continues-earlier {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      .rbc-event-continues-later {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      .rbc-row {
        display: flex;
        flex-direction: row;
      }
      .rbc-row-segment {
        padding: 0 1px 1px 1px;
      }
      .rbc-selected-cell {
        background-color: rgba(0, 0, 0, 0.1);
      }
      .rbc-show-more {
        background-color: rgba(255, 255, 255, 0.3);
        z-index: 4;
        font-weight: bold;
        font-size: 85%;
        height: auto;
        line-height: normal;
        white-space: nowrap;
      }
      .rbc-month-view {
        position: relative;
        border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        display: flex;
        flex-direction: column;
        flex: 1 0 0;
        width: 100%;
        user-select: none;
        height: 100%;
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        border-radius: 10px;
      }
      .rbc-month-row{
        &:not(:last-child){
          .rbc-day-bg {
            border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
          }
        }
      }
      .rbc-date-cell{
        &.rbc-off-range{
          .rbc-button-link{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
          }
        }
        .rbc-button-link{
          margin-top: 5px;
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
          @media only screen and (max-width: 575px){
            font-size: 12px;
          }
        }
      }
      .rbc-month-header {
        display: flex;
        flex-direction: row;
      }
      .rbc-month-row {
        display: flex;
        position: relative;
        flex-direction: column;
        flex: 1 0 0;
        flex-basis: 0px;
        overflow: hidden;
        height: 100%;
      }
      .rbc-month-row + .rbc-month-row {
      }
      .rbc-date-cell {
        flex: 1 1 0;
        min-width: 0;
        padding-right: 5px;
        text-align: right;
      }
      .rbc-date-cell.rbc-now {
        font-weight: bold;
      }
      .rbc-date-cell > a,
      .rbc-date-cell > a:active,
      .rbc-date-cell > a:visited {
        color: inherit;
        text-decoration: none;
      }
      .rbc-row-bg {
        display: flex;
        flex-direction: row;
        flex: 1 0 0;
        overflow: hidden;
      }
      .rbc-day-bg {
        flex: 1 0 0%;
        &:not(:last-child){
          border-right: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        }
        &.rbc-today{
          position: relative;
          background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}}15;
          &:after{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 2px;
            content: '';
            background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
          }
        }
      }
      .rbc-day-bg + .rbc-day-bg {
      }
      .rbc-rtl .rbc-day-bg + .rbc-day-bg {
        border-left-width: 0;
      }
      .rbc-overlay {
        position: absolute;
        z-index: 5;
        border: 1px solid #e5e5e5;
        background-color: #fff;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
        padding: 10px;
      }
      .rbc-overlay > * + * {
        margin-top: 1px;
      }
      .rbc-overlay-header {
        border-bottom: 1px solid #e5e5e5;
        margin: -10px -10px 5px -10px;
        padding: 10px;
      }
      .rbc-agenda-view {
        display: flex;
        flex-direction: column;
        flex: 1 0 0;
        overflow: auto;
        .rbc-agenda-table{
          .primary,
          .secondary,
          .info,
          .success,
          .danger,
          .warning,
          .secondary{
            background-color: transparent;
          }
          td{
            &:first-child{
              border-radius: 10px 0 0 0;
            }
          }
        }
      }
      .rbc-agenda-view table.rbc-agenda-table {
        width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
        border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
      }
      .rbc-agenda-view table.rbc-agenda-table{
        thead{
          display: none;
        }
        tbody{
          >tr{
            &:not(:last-child){
              border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
            }
            &:hover{
              box-shadow: 0 15px 40px rgba(146,153,184,.08);
              border-bottom-color: transparent;
            }
            
            >td{
              font-size: 14px;
              padding: 15px 20px;
              vertical-align: top;
            }
            .rbc-agenda-date-cell,
            .rbc-agenda-event-cell{
              font-weight: 500;
              color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}}
            }
            .rbc-agenda-time-cell{
              span{
                font-size: 13px;
                position: relative;
                padding-left: 20px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
                &:after{
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  left: 0;
                  width: 10px;
                  height: 10px;
                  content: '';
                  border-radius: 50%;
                }
              }
            }
            &.primary{
              .rbc-agenda-time-cell{
                span{
                  &:after{
                    background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                  }
                }
              }
            }
            &.secondary{
              .rbc-agenda-time-cell{
                span{
                  &:after{
                    background-color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
                  }
                }
              }
            }
            &.info{
              .rbc-agenda-time-cell{
                span{
                  &:after{
                    background-color: ${t=>{let{theme:e}=t;return e["info-color"]}};
                  }
                }
              }
            }
            &.success{
              .rbc-agenda-time-cell{
                span{
                  &:after{
                    background-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                  }
                }
              }
            }
          }
        }
        .rbc-agenda-time-cell{
          padding-left: 15px;
          padding-right: 15px;
          text-transform: lowercase;
        }
      }
      .rbc-rtl .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td {
        border-left-width: 0;
      }
      .rbc-agenda-time-cell {
        text-transform: lowercase;
      }
      .rbc-agenda-time-cell .rbc-continues-after:after {
        content: ' »';
      }
      .rbc-agenda-time-cell .rbc-continues-prior:before {
        content: '« ';
      }
      .rbc-agenda-date-cell,
      .rbc-agenda-time-cell {
        white-space: nowrap;
        font-size: 12px;
      }
      .rbc-agenda-event-cell {
        width: 100%;
        font-size: 12px;
      }
      .rbc-time-column {
        display: flex;
        flex-direction: column;
        min-height: 100%;

      }
      .rbc-time-column .rbc-timeslot-group {
        flex: 1;
      }
      .rbc-timeslot-group {
        min-height: 40px;
        display: flex;
        flex-flow: nowrap;
      }
      .rbc-time-gutter,
      .rbc-header-gutter {
        -webkit-flex: none;
        -ms-flex: none;
        flex: none;
      }
      .rbc-label {
        padding: 0 20px;
      }
      .rbc-day-slot {
        position: relative;
      }
      .rbc-day-slot .rbc-events-container {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        margin-right: 10px;
        top: 0;
        .rbc-addons-dnd-resizable{
          display: flex;
          flex-direction: column;
          padding-top: 8px;
          .rbc-event-content{
            order: -1;
            font-weight: 500;
          }
        }
      }
      .rbc-day-slot .rbc-events-container.rbc-is-rtl {
        left: 10px;
        right: 0;
      }
      .rbc-day-slot .rbc-event {
        display: flex;
        max-height: 100%;
        -webkit-flex-flow: column wrap;
        -ms-flex-flow: column wrap;
        flex-flow: column wrap;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
        overflow: hidden;
        position: absolute;
      }
      .rbc-day-slot .rbc-event-label {
        flex: none;
        padding-right: 5px;
        width: auto;
      }
      .rbc-day-slot .rbc-event-content {
        width: 100%;
        flex: 1 1 0;
        word-wrap: break-word;
        line-height: 1;
        height: 100%;
        min-height: 1em;
      }
      .rbc-day-slot .rbc-time-slot {
        border-top: 1px solid transparent;
      }
      .rbc-time-view-resources .rbc-time-gutter,
      .rbc-time-view-resources .rbc-time-header-gutter {
        position: -webkit-sticky;
        position: sticky;
        left: 0;
        background-color: white;
        border-right: 1px solid #ddd;
        z-index: 10;
        margin-right: -1px;
      }
      .rbc-time-view-resources .rbc-time-header {
        overflow: hidden;
      }
      .rbc-time-view-resources .rbc-time-header-content {
        min-width: auto;
        flex: 1 0 0;
        flex-basis: 0px;
      }
      .rbc-time-view-resources .rbc-time-header-cell-single-day {
        display: none;
      }
      .rbc-time-view-resources .rbc-day-slot {
        min-width: 140px;
      }
      .rbc-time-view-resources .rbc-header,
      .rbc-time-view-resources .rbc-day-bg {
        width: 140px;
        -webkit-flex: 1 1 0;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex-basis: 0 px;
        -ms-flex-preferred-size: 0 px;
        flex-basis: 0 px;
      }
      .rbc-time-header-content + .rbc-time-header-content {
        margin-left: -1px;
      }
      .rbc-time-slot {
        -webkit-flex: 1 0 0;
        -ms-flex: 1 0 0px;
        flex: 1 0 0;
      }
      .rbc-time-slot.rbc-now {
        font-weight: bold;
      }
      .rbc-day-header {
        text-align: center;
      }
      .rbc-slot-selection {
        z-index: 10;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 75%;
        width: 100%;
        padding: 3px;
      }
      .rbc-slot-selecting {
        cursor: move;
      }
      .rbc-time-view {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        min-height: 0;
        border-radius: 10px;
        border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        .rbc-time-header{
          .rbc-label{
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background"]}};
          }
          .rbc-header{
            border-left: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
          }
          
          .rbc-event{
            position: relative;
            padding: 3px 10px;
            &:after{
              position: absolute;
              left: 0;
              top: 0;
              width: 2px;
              height: 100%;
              border-radius: 3px 0 0 3px;
              content: "";
            }
            &.primary{
              background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}}15;
              color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
              &:after{
                background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
              }
            }
            &.secondary{
              background-color: ${t=>{let{theme:e}=t;return e["secondary-color"]}}15;
              color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
              &:after{
                background-color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
              }
            }
            &.info{
              background-color: ${t=>{let{theme:e}=t;return e["info-color"]}}15;
              color: ${t=>{let{theme:e}=t;return e["info-color"]}};
              &:after{
                background-color: ${t=>{let{theme:e}=t;return e["info-color"]}};
              }
            }
            &.warning{
              background-color: ${t=>{let{theme:e}=t;return e["warning-color"]}}15;
              color: ${t=>{let{theme:e}=t;return e["warning-color"]}};
              &:after{
                background-color: ${t=>{let{theme:e}=t;return e["warning-color"]}};
              }
            }
            &.success{
              background-color: ${t=>{let{theme:e}=t;return e["success-color"]}}15;
              color: ${t=>{let{theme:e}=t;return e["success-color"]}};
              &:after{
                background-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
              }
            }
          }
        }
        .rbc-time-content{
          .rbc-time-column{
            .rbc-timeslot-group{
              align-items: center;
              justify-content: center;
              border-top: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
              .rbc-time-slot{
                span{
                  font-size: 14px;
                  display: inline-block;
                  color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                }
              }
            }
          }
          .rbc-day-slot {
            border-left: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
          }
          .rbc-event{
            position: relative;
            padding: 3px 10px;
            &:after{
              position: absolute;
              left: 0;
              top: 0;
              width: 2px;
              height: 100%;
              border-radius: 3px 0 0 3px;
              content: "";
            }
            &.primary{
              background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}}15;
              color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
              &:after{
                background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
              }
            }
            &.secondary{
              background-color: ${t=>{let{theme:e}=t;return e["secondary-color"]}}15;
              color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
              &:after{
                background-color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
              }
            }
            &.info{
              background-color: ${t=>{let{theme:e}=t;return e["info-color"]}}15;
              color: ${t=>{let{theme:e}=t;return e["info-color"]}};
              &:after{
                background-color: ${t=>{let{theme:e}=t;return e["info-color"]}};
              }
            }
            &.warning{
              background-color: ${t=>{let{theme:e}=t;return e["warning-color"]}}15;
              color: ${t=>{let{theme:e}=t;return e["warning-color"]}};
              &:after{
                background-color: ${t=>{let{theme:e}=t;return e["warning-color"]}};
              }
            }
            &.success{
              background-color: ${t=>{let{theme:e}=t;return e["success-color"]}}15;
              color: ${t=>{let{theme:e}=t;return e["success-color"]}};
              &:after{
                background-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
              }
            }
            .rbc-event-content{
              font-size: 13px;
              margin-bottom: 4px;
            }
          }
        }
      }
      .rbc-time-view .rbc-time-gutter {
        white-space: nowrap;
      }
      .rbc-time-view .rbc-allday-cell {
        box-sizing: content-box;
        width: 100%;
        height: 100%;
        position: relative;
      }
      .rbc-time-view .rbc-allday-cell + .rbc-allday-cell {
        border-left: 1px solid #ddd;
      }
      .rbc-time-view .rbc-allday-events {
        position: relative;
        z-index: 4;
      }
      .rbc-time-view .rbc-row {
        box-sizing: border-box;
      }
      .rbc-time-header {
        display: flex;
        flex: 0 0 auto;
        flex-direction: row;
        border-radius: 10px 10px 0 0;
        .rbc-time-header-gutter{
          border-radius: 10px 0 0 0;
        }
        .rbc-row-bg{
          .rbc-day-bg{
            &:first-child{
              border-left: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};;
            }
          }
        }
      }
      .rbc-time-header.rbc-overflowing {
      }
      .rbc-rtl .rbc-time-header.rbc-overflowing {
        border-right-width: 0;
      }
      .rbc-time-header > .rbc-row:first-child {
      }
      .rbc-time-header > .rbc-row.rbc-row-resource {
      }
      .rbc-time-header-cell-single-day {
        display: none;
      }
      .rbc-time-header-content {
        flex: 1;
        display: flex;
        min-width: 0;
        flex-direction: column;
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        .rbc-header{
          border-radius: 0px;
          &:last-child{
            border-radius: 0 10px 0 0;
          }
        }
        .rbc-row{
          background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        }
      }
      .rbc-rtl .rbc-time-header-content {
        border-left-width: 0;
      }
      .rbc-time-content {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex: 1 0 0%;
        -ms-flex: 1 0 0%;
        flex: 1 0 0%;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
        width: 100%;
        overflow-y: auto;
        position: relative;
      }
      .rbc-time-content > .rbc-time-gutter {
        -webkit-flex: none;
        -ms-flex: none;
        flex: none;
      }
      .rbc-time-content > * + * > * {
      }
      .rbc-rtl .rbc-time-content > * + * > * {
        border-left-width: 0;
      }
      .rbc-time-content > .rbc-day-slot {
        width: 100%;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-select: none;
      }
      .rbc-current-time-indicator {
        position: absolute;
        z-index: 3;
        left: 0;
        right: 0;
        height: 1px;
        pointer-events: none;
      }
      button.rbc-button-link{
          border: 0 none;
          background-color: transparent;
      }
`,n.Ay.div`
.ant-picker{
  padding: 6px 11px 6px;
  width: 100%;
  border-color:${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
  border-radius: 5px;
}
.ant-picker-input > input{
  color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
}
.ant-picker-range .ant-picker-input > input{
  text-align: center;
  font-weight: 500;
}
.ant-picker-range-separator .ant-picker-separator{
  display: flex;
}
`,n.Ay.div`
    display: flex;
    flex-direction: column;
    .rdrDateDisplay, .rdrMonthAndYearPickers{
        display: none;
    }
    .rdrInputRange {
        padding: 5px 10px;
    }
    .rdrMonth {
        position: relative;
        max-width: 272px;
    }
    .rdrMonthName {
        text-align: center;
        font-size: 18px;
        position: absolute;
        top: -50px;
        ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 100px;
        font-weight: 400;
        @media only screen and (max-width: 767px) {
          top: -30px;
        }
    }
    .rdrDefinedRangesWrapper{
        .rdrStaticRanges{
            .rdrStaticRange{
                border-bottom: 0 none;
                &:hover,
                &.rdrStaticRangeSelected{
                    span{
                        font-weight: 400;
                        color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                        background-color: rgba(${t=>{let{theme:e}=t;return e[e.mainContent]["primary-color-rgb"]}},.10);
                    }
                }
                .rdrStaticRangeLabel{
                    padding: 9px 10px;
                }
            }
        }
    }
    .rdrCalendarWrapper{
      overflow-y: auto;
        .rdrPprevButton,
        .rdrNextButton{
            padding: 0;
            background: transparent;
        }
        .rdrMonthsHorizontal{
            .rdrMonth{
                .rdrMonthName{
                    font-size: 13px;
                    font-weight: 500;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-color"]}};
                }
            }
            .rdrDays{
                .rdrSelected, 
                .rdrInRange{                    
                    background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-color"]}};
                    left: 0 !important;
                    right: 0 !important;
                }
                .rdrStartEdge{
                    right: 0 !important;
                    left: 0 !important;
                }
                .rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{
                    border-radius: 0px;
                }
                
                .rdrDayEndOfWeek .rdrDayStartPreview,
                .rdrDayEndOfWeek .rdrDayInPreview,
                .rdrDayEndOfMonth .rdrDayStartPreview,
                .rdrDayEndOfMonth .rdrDayInPreview,
                .rdrDayEndOfMonth .rdrInRange, 
                .rdrDayEndOfWeek .rdrInRange, 
                .rdrDayEndOfWeek .rdrStartEdge
                .rdrDayStartOfMonth .rdrInRange, 
                .rdrDayStartOfWeek .rdrInRange{
                    border-radius: 0;
                }

                .rdrDayEndOfWeek .rdrDayStartPreview.rdrDayEndPreview,
                .rdrDayStartOfWeek .rdrDayStartPreview.rdrDayEndPreview,
                .rdrDayEndOfMonth .rdrDayStartPreview.rdrDayEndPreview,
                .rdrDayStartOfMonth .rdrDayStartPreview.rdrDayEndPreview{
                    border-radius: 1.042em;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-color"]}} !important;
                }
                
                .rdrDayEndPreview,
                .rdrDayStartPreview,
                .rdrDayInPreview{
                    border: 0 none;
                    background-color: #EFEFFE;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-color"]}} !important;
                    top: 0;
                    bottom: 0;
                }
                
                .rdrStartEdge, 
                .rdrEndEdge,
                .rdrDayStartPreview,
                .rdrDayEndPreview{
                    background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                }

                .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,
                .rdrDay:not(.rdrDayPassive) .rdrDayInPreview ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-color"]}} !important;
                }
                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrInRange ~ .rdrDayNumber span,
                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrDayInPreview ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrSelected ~ .rdrDayNumber span{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-color"]}} !important;
                }
                .rdrDay:not(.rdrDayPassive) .rdrDayEndPreview ~ .rdrDayNumber span,
                .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-color"]}};
                }
                .rdrDay{
                    margin-bottom: 3px;
                    .rdrSelected, 
                    .rdrInRange, 
                    .rdrStartEdge, 
                    .rdrEndEdge{
                        top: 0;
                        bottom: 0;

                    }
                    .rdrDayNumber{
                        z-index: 10;
                    }
                    &.rdrDayToday{
                        background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-color"]}};
                        border-radius: 50%;
                        .rdrDayNumber{
                            span{
                                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-color"]}};
                                &:after{
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`,n.Ay.div`
  .ant-carousel{
    .slick-dots{
        &.slick-dots-bottom{
            bottom: -10px;
        }
        li{
            width: auto;
            &.slick-active{
                width: auto;
            }
            button{
                width: 5px;
                height: 5px;
                border-radius: 50%;
            }
        }
    }
  }
`,n.Ay.div`
  .custom-collapse-style {
    .ant-collapse-item{
        border: 0 none;
    }
    .ant-collapse-header{
        display: flex;
        padding: 0 0 0 18px !important;
        padding: ${t=>{let{theme:e}=t;return e.rtl?"0 18px 0 0":"0 0 0 18px"}} !important;
        background-color: transparent;
        .ant-collapse-expand-icon{
            display: flex;
        }
        .ant-collapse-arrow{
            font-size: 10px;
            margin-right: 8px;
            margin-top: 7px;
            top: 6px;
            ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0px;
        }
    }
    .ant-collapse-content {
        border: 0 none;
        background: transparent;
        .ant-collapse-content-box{
            padding: 0;
        }
    }
  }
    
`,n.Ay.div`

`,n.Ay.div`

`,n.Ay.div`
    
`,n.Ay.div`

`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
    
`,n.Ay.div`
  .knowledge-details-custom-collapse {
    border: 0 none;
    background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
    > .ant-collapse-item .ant-collapse-header .ant-collapse-arrow{
        top: ${t=>{let{theme:e}=t;return e.rtl?"15px":"-3px"}};
    }
    .ant-collapse-item{
      border: 0 none;
      .ant-collapse-header{
        position: relative;
        padding: 0;
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        .anticon{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: #fff;
          box-shadow: 0 2px 2px #92949F30;
          &.anticon-right{
            ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: auto;
            ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 0;
          }
          svg,
          img,
          i{
            min-width: 14px;
            color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
          } 
        }
      }
      .ant-collapse-content {
        border: 0 none;
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        .ant-collapse-content-box{
          padding: 0;
        }
      }
    }
  }
`,n.Ay.div`
    .ant-card-body{
        padding: 12px 25px 10px !important;
    }
`,n.Ay.div`
  .cashflow-wrap{
    .ant-card{
        min-height: 500px;
        @media only screen and (max-width: 1599px){
          min-height: 440px;
        }
        @media only screen and (max-width: 1450px){
          min-height: 410px;
        }
    }
  }
  .youtube-subscriber-wrap{
      .ant-card{
          min-height: 470px;
      }
  }
  .hexadash-sales-inner{
    padding-bottom: 48px;
  }
`,n.Ay.div`
  .location-map >div{
    @media only screen and (max-width: 767px){
      height: 100%;
    }
  }
`,n.Ay.div`
    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
    border-radius: 10px;
    padding: 25px 25px 20px;
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-bottom: 30px;
    ${t=>{let{theme:e}=t;return e.topMenu?"min-height: 595px":"min-height: auto"}};
    @media only screen and (max-width: 991px){
        min-height: auto;
    }
    &:before{
        position: absolute;
        content: '';
        width: 100%;
        height: 215px;
        background:linear-gradient(45deg, ${t=>{let{theme:e}=t;return e["secondary-color"]}}, ${t=>{let{theme:e}=t;return e["warning-color"]}});
  ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}:0;
        top: 0;
        z-index:-1;
    }
    .overview-box{
        .ant-card-body{
            padding: 22px 25px 14px !important;
        }
        .ant-progress{
            margin-bottom: 15px;
        }
        .ant-progress-bg{
            height: 6px !important;
        }
        .overview-box-single{
            h1{
                margin-bottom: 0;
            }
            p{
                color: ${t=>{let{theme:e}=t;return e["light-color"]}};
            }
        }
        .growth-downward,
        .growth-upward{
            span{
                ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 6px;
            }
        }
        .overview-box-percentage{
            font-weight: 500;
        }
    }
    .ant-card{
        box-shadow: 0 10px 30px rgba(146,153,184,0.15);
        .growth-upward{
            color: ${t=>{let{theme:e}=t;return e["success-color"]}};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            span{
                color: ${t=>{let{theme:e}=t;return e["light-gray-color"]}};
                font-weight: 400;
                font-size: 13px;
            }
        }
        .growth-downward{
            color: ${t=>{let{theme:e}=t;return e["danger-color"]}};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            span{
                color: ${t=>{let{theme:e}=t;return e["light-gray-color"]}};
                font-weight: 400;
                font-size: 13px;
            }
        }
    }
    .overview-head{
        margin-bottom: 70px;
        h1{
            font-size: 16px;
            font-weight: 500;
            color: #fff;
        }
        .ant-btn-default{
            font-size: 12px;
            background: rgba(255,255,255,0.1);
            padding: 0px 11px;
            border: 0 none;
            color: #fff;
            svg,
            img,
            i{
                ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 8px;
            }
        }
    }
`,n.Ay.div`
    margin: 20px 0 10px;
    @media (max-width: 991px){
        margin: 5px 0 5px;
    }
    @media (max-width: 767px){
        margin: 10px 0 10px;
    }
    .ant-page-header.hexadash-page-header-main{
        padding: 18px 30px 15px;
    }
    .ant-page-header-heading{
        .ant-page-header-heading-title{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
            @media only screen and (max-width: 767px){
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 12px;
            }
        }
    }
    .ant-page-header-heading-sub-title{
        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 0;
        position: relative;
        ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 15px;
        font-weight: 500;
        &:before{
            position: absolute;
            content: '';
            width: 1px;
            height: 24px;
            background: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
            ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0;
            top:0;
        }
    }
`,n.Ay.div`
    margin-bottom: 25px;
    .project-sort-bar{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0 -10px;
        @media only screen and (max-width: 1299px){
            // flex-direction: column;
            justify-content: space-between;
        }
        .project-sort-group{
            @media only screen and (max-width: 1150px){
                flex: 0 0 100%;
                display: flex;
                justify-content: center;
            }
        }
        .project-sort-nav,
        .project-sort-search,
        .project-sort-group{
            padding: 0 10px;
        }
        .project-sort-nav{
            @media only screen and (max-width: 1150px){
                margin: 0 auto;
            }
        }

        .project-sort-group{
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: auto;
            @media only screen and (max-width: 1299px){
                ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 0;
            }
            @media only screen and (max-width: 1199px){
                margin: 15px 0 0;
            }
        }
        .project-sort-search{
            @media only screen and (max-width: 1299px){
                margin: 15px 0;
            }
            @media only screen and (max-width: 1199px){
                margin: 0 0 15px;
            }
            .ant-select-selection-search{
                width: 100% !important;
            }
        }
        nav{
            ul{
                li{
                    
                    a{
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
                        &:hover{
                            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 1500px){
        .project-sort-search{
            .ant-select{
                width: 237px !important;
            }
        }
        .project-sort-group .sort-group{
            .ant-select{
                min-width: 180px;
            }
        }
    }
    @media (min-width: 1201px) and (max-width: 1300px) {
        .project-sort-search{
            .ant-select{
                width: 170px !important;
            }
        }
        .project-sort-group{
            padding: 0 5px;
            
        }
        .project-sort-group .sort-group .layout-style a{
            width: 35px;
            height: 35px;
        }
        .project-sort-group .sort-group .ant-select {
            min-width: 170px;
            ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 5px;
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 5px;
        }
    }
    @media (max-width: 1199px){
        .project-sort-search{
            flex: 0 0 100%;
            order: 0;
            margin-bottom: 25px;
            display: flex;
            justify-content: center;
            .ant-select{
                width: 350px !important;
            }
        }
        .project-sort-nav{
            order: 1;
            margin: 0 auto;
        }
        .project-sort-group{
            order: 2;
        }
    }
    @media (max-width: 991px){
        .project-sort-group{
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: unset;
            flex: 0 0 100%;
            margin-top: 15px;
            .sort-group{
                justify-content: flex-start;
                .layout-style{
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: auto;
                }
            }
        }
    }
    @media (max-width: 575px){
        .project-sort-group{
            .sort-group{
                > span{
                    display: none;
                }
            }
        }
    }

    nav{
        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        border-radius: 5px;
        padding: 9px 20px;
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            li{
                ${t=>{let{theme:e}=t;return e.rtl?"padding-left":"padding-right"}}: 12px;
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 11px;
                ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                &:last-child{
                    ${t=>{let{theme:e}=t;return e.rtl?"padding-left":"padding-right"}}: 0;
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 0;
                    ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 0 none;
                }
                a{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
                    font-weight: 400;
                }
                &.active{
                    a{
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
                    }
                }
            }
        }
    }
    .ant-select-selection-search-input{
        border: 0 none;
        border-radius: 23px;
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};
        input{
            height: 40px !important;
            border-radius: 23px;
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};
        }
        .ant-input-suffix{
            svg{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
            }
        }
    }
    .ant-select-arrow{
        right: auto;
        ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 11px !important;
        svg{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
        }
    }
    
    .sort-group{
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        display: flex;
        align-items: center;
        justify-content: flex-end;

               
        .ant-select{
            ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 10px;
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 15px;
            @media only screen and (max-width: 575px){
                ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 0px;
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 15px;
            }
            min-width: 260px;
            .ant-select-selector{
                border: 0 none;
                background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};
                .ant-select-selection-item{                    
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                }
                
            }
        }
        .layout-style{
            display: flex;
            align-items: center;
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 20px;
            a{
                display: flex;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                align-items: center;
                justify-content: center;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                &:hover,
                &.active{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
                    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                }
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }
    @media (max-width: 400px){
        .sort-group .ant-select{
            min-width: 200px;
        }
        .project-sort-search{
            .ant-select-auto-complete{
                width: 100% !important;
            }
        }
        .project-sort-nav{
            nav{
                padding: 10px;
            }
            nav ul{
                flex-wrap: wrap;
                justify-content: center;
                margin-bottom: -5px;
                li{
                    ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 0 none;
                    margin-bottom: 5px;
                }
            }
        }
    }
`,n.Ay.div`
    .ant-card-body{
        padding: 0px !important;
    }
    .project-top{
        padding:30px 30px 0px;
    }
    .project-bottom{
        .project-assignees{
            padding: 16px 30px 25px;
        }
    }
    .project-title{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        h1{
            font-size: 16px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: -2px;
            a{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 11px !important;
            }
            a,
            .ant-tag{
                margin: 2px;
            }
            .ant-tag{
                text-transform: uppercase;
                font-size: 10px;
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 0;
                line-height: 18px;
                background: red;
                color: #fff;
                border: 0 none;
                &.early{
                    background: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                }
                &.progress{
                    background: #FF4D4F;
                }
                &.late{
                    background: ${t=>{let{theme:e}=t;return e["warning-color"]}};
                }
                &.complete{
                    background: ${t=>{let{theme:e}=t;return e["success-color"]}};
                }
            }
        }
        .ant-dropdown-trigger{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
            svg{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
            }
        }
    }
    .project-desc{
        margin: 7px 0 25px 0;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    }
    .project-timing{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        div{
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 30px;
            &:last-child{
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 0;
            }
            span, strong{
                display: block;
            }
            span{
                font-size: 12px;
                margin-bottom: 2px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            }
            strong{
                font-weight: 500;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            }
        }
    }
    .project-progress{
        p{
            margin: 2px 0 0 0;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            font-size: 12px;
        }
        .ant-progress-text{
            font-size: 12px;
            font-weight: 500;
        }
    }
    .ant-progress{
        &.ant-progress-status-success{
            .ant-progress-text{
                svg{
                    color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                }
            }
        }
    }
    .project-assignees{
        border-top: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        margin-top: 17px;
        padding-top: 16px;
        p{
            font-size: 14px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
        ul{
            margin: -3px;
            padding: 0;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            li{
                list-style: none;
                padding: 3px;
                img{
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }
        }
    }
`,n.Ay.div`
    .ant-pagination{
        display: flex;
        justify-content: flex-end;
        @media only screen and (max-width: 767px) {
            justify-content: center;
        }
    }
`,n.Ay.div`
    h1{
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 5px;
        a{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
        }
    }
    p{
        margin: 0;
        font-size: 12px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    }
`,n.Ay.div`
    ul{
        margin: -3px;
        padding: 0;
        display: flex;
        align-items: center;
        li{
            list-style: none;
            padding: 3px;
            img{
                width: 35px;
                height: 35px;
                border-radius: 50%;
                object-fit: cover;
            }
        }
    }
`,n.Ay.div`

    .project-list-progress{
        p{
            margin: 4px 0 0 0;
            font-size: 13px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
    }
    .date-started,
    .date-finished{
        font-weight: 500;
    }
    .ant-table{
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        .ant-table-thead{
            tr{
                th{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
                    background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background-light"]}};
                    border-bottom-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                }
            }
        }
        .ant-table-tbody{
            tr{
                &:hover{
                    td{
                        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                    }
                }
                .ant-tag{
                    &.progress{
                        background-color: #FF4D4F;
                    }
                    &.late{
                        background-color: ${t=>{let{theme:e}=t;return e["warning-color"]}};
                    }
                    &.complete{
                        background-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                    }
                }
                td{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                    border-bottom-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                }
            }
            .ant-progress{
                &.ant-progress-status-success{
                    .ant-progress-text{
                        svg{
                           color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                        }
                    }
                }
            }
            .ant-dropdown-trigger {
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }
    .ant-table-container table > thead > tr th{
        font-weight: 400;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
        border-top: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
    }
    .ant-table-container table > thead > tr th:first-child{
        border-radius: ${t=>{let{theme:e}=t;return e.rtl?"0 10px 10px 0":"10px 0 0 10px"}} !important;
        ${t=>{let{theme:e}=t;return e.rtl?"border-right":"border-left"}}: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
    }
    .ant-table-container table > thead > tr th:last-child{
        border-radius: ${t=>{let{theme:e}=t;return e.rtl?"10px 0 0 10px":"0 10px 10px 0"}} !important;
        ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
    }
    .ant-dropdown-trigger{
        svg{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
        }
    }
`,n.Ay.div`
    .ant-page-header{
        padding-top: 30px;
    }
    .project-header{
        display: flex;
        align-items: center;
        margin: 8px 0 16px;
        @media only screen and (max-width: 800px) {
            flex-wrap: wrap;
        }
        @media only screen and (max-width: 575px) {
            flex-flow: column;
            button{
                margin: 15px 0 0;
            }
        }
        h1{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 20px;
            margin-bottom: 0;
            font-size: 20px;
            @media only screen and (max-width: 800px) {
                margin-bottom: 10px;
            }
            @media only screen and (max-width: 575px) {
                margin: 0;
            }
        }
        button{
            font-size: 12px;
            font-weight: 500;
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 10px;
            height: 35px;
            padding: 0px 13.5px;
            &.btn-markComplete{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                transition: .25s;
                border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-deep"]}};
                &:hover{
                    color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                    svg{
                        color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                    }
                }
            }
        }
    }
    .project-action{
        .project-edit,
        .project-remove{
            border-radius: 6px;
            background: #fff;
            height: 35px;
            padding: 0 15px;
            font-size: 12px;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0 5px;
            border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
            box-shadow: 0 3px 5px ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}}05;
            svg,
            img{
                width: 14px;
                height: 14px;
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 6px;
            }
        }
        .project-edit{
            color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
        }
        .project-remove{
            color: ${t=>{let{theme:e}=t;return e["danger-color"]}};
        }
    }
    .project-progress{
        border-radius: 10px;
        background: ${t=>{let{theme:e}=t;return e["success-color"]}};
        padding: 20px 25px 20px;
        margin-bottom: 25px;
        h3{
            color: #fff;
        }
        
        .ant-progress{
            .ant-progress-inner{
                background: rgba(255,255,255, 0.2);
            }
            .ant-progress-bg{
                background: rgb(255, 255, 255);
            }
            .ant-progress-text{
                color: #fff;
                font-weight: 500;
            }
        }
    }
    .about-project-wrapper{
        min-height: 485px;
        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        border-radius: 10px;
        margin-bottom: 25px;
        @media only screen and (max-width: 1199px) {
            min-height: auto;
        }
    }
    .state-single{
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        &:last-child{
            margin-bottom: 0;
        }
        > div{
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 20px;
        }
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 12px;
            background: rgba(95,99,242,0.1);
            svg{
                width: 25px;
                height: 25px;
            }
        }
        h1{
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 3px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
        }
        p{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            margin: 0;
        }
        .color-primary{
            a{
                background: rgba(251,53,34,0.1);
                svg{
                    color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                }
            }
        }
        .color-secondary{
            a{
                background: rgba(95,99,242,0.1);
                svg{
                    color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
                }
            }
        }
        .color-success{
            a{
                background: rgba(32,201,151,0.1);
                svg{
                    color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                }
            }
        }
        .color-warning{
            a{
                background: rgba(250,139,12,0.1);
                svg{
                    color: ${t=>{let{theme:e}=t;return e["warning-color"]}};
                }
            }
        }
    }
    .about-content{
        p{
            font-size: 15px;
            line-height: 25px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
    }
    .about-project{
        margin: 42px -40px 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        @media only screen and (max-width: 991px) {
            margin: 42px -25px 0;
        }
        @media only screen and (max-width: 575px) {
            margin: 42px -15px 0;
        }
        div{
            margin: 0 40px;
            @media only screen and (max-width: 991px) {
                margin: 0 25px;
            }
            @media only screen and (max-width: 575px) {
                flex: 0 0 38%;
                margin: 0 15px;
            }
            span{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                font-size: 13px;
                display: block;
                margin-bottom: 3px;
            }
            p{
                font-weight: 500;
            }
            .color-primary{
                color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
            }
            .color-danger{
                color: ${t=>{let{theme:e}=t;return e["danger-color"]}};
            }
        }
    }
    .project-users-wrapper{
        .btn-addUser{
            padding: 0px 12.6px;
            font-size: 12px;
            font-weight: 500;
            transition: .25s;
            border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
            &:hover{
                svg{
                    color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                }
            }
        }
        i +span, svg +span, img +span {
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 6px;
        }
    }
    .project-users{
        min-height: 368px;
        .porject-user-single{
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            &:last-child{
                margin-bottom: 0;
            }
            & > div{
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 15px;
            }
            div{
                img{
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    object-fit: cover;
                    display: block;
                }
                h1{
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 2px;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                }
                p{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                    margin: 0;
                }
            }
        }
    }

    .file-list{
        min-height: 385px;
        .file-list__single{
            justify-content: space-between;
            align-items: center;
            &:not(:last-child){
                margin-bottom: 18px;
            }
            span{
                display: block;
                font-size: 12px;
                line-height: 1.42;
                &.file-name{
                    font-size: 14px;
                    font-weight: 500;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                }
                &.file-size{
                    margin: 2px 0;;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                }
                &.file-content-action{
                    a{
                        font-weight: 500;
                        color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                    }
                    a + a{
                        margin-left: 8px;
                    }
                }
            }
        }
        .file-single-info{
            width: 50%;
            align-items: center;
            .file-single-logo{
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 16px;
                img{
                    max-width: 42px;
                }
            }
        }
        .file-single-action{
            .ant-dropdown-trigger {
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }

    .dropdown-more{
        a{
            font-size: 13px;
            svg,
            i.
            img{
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 8px;
            }
        }
    }
`,n.Ay.div`
    .ant-card{
        .ant-card-head{
            border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
            margin-bottom: 0;
        }
        .ant-card-body{
            padding: 0 !important;
        }
    }
    nav{
        a{
            font-size: 14px;
            font-weight: 500;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            position: relative;
            padding: 20px 0px;
            &:not(:last-child){
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 18px;
            }
            &:before{
                position: absolute;
                content: '';
                width: 100%;
                ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0;
                bottom: -1px;
                height: 1px;

            }
            &.active{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
                &:before{
                    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
                }
            }
        }
    }
    .ant-table{
        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
    }
    table{
        margin-top: 15px;
        .ant-checkbox.ant-checkbox-checked{
            .ant-checkbox-inner{
                background: ${t=>{let{theme:e}=t;return e["success-color"]}};
                border-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
            }
            &:after{
                border-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
            }
        }
        thead{
            display: none;
        }
        tr{
            th{
                background: #fff;
                border-bottom: 0;
                padding: 10px;
                &:first-child{
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 25px;
                }
                .ant-checkbox-indeterminate {
                    .ant-checkbox-inner{
                        &:after{
                            background: ${t=>{let{theme:e}=t;return e["success-color"]}};
                        }
                    }
                }
            }
            &:hover{
                td{
                    background: #fff;
                }
            }
        }
        .ant-table-tbody{
            > tr.ant-table-row{
                &.ant-table-row-selected{
                    > td{
                        background: #fff;
                    }
                    .task-title{
                        text-decoration: line-through;
                    }
                }
                > td{
                    padding: 10px;
                    border-bottom: 0;
                    text-align: ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}};
                    &:first-child{
                        ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 25px;
                    }
                    &:last-child{
                        ${t=>{let{theme:e}=t;return e.rtl?"padding-left":"padding-right"}}: 25px;
                    }
                    .task-title{
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                    }
                    .task-created{
                        font-size: 12px;
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                    }
                    .ant-checkbox{
                        &:hover{
                            .ant-checkbox-inner{
                                border-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                            }
                        }
                    }
                }
                &:hover{
                    box-shadow: 0 15px 50px ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}}20;
                    > td{
                        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                    }
                }
            }
        }
    }

    .tasklist-action{
        margin: 18px 25px 25px;
        button{
            width: 100%;
            text-align: ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}};
            justify-content: flex-start;
            font-size: 12px;
            font-weight: 500;
            &.ant-btn-primary{
                border-radius: 6px;
                background: ${t=>{let{theme:e}=t;return e["primary-color"]}}10;
            }
        }
    }
`,n.Ay.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 -10px;
    span, img, div{
        display: block;
        margin: 0 10px;
        line-height: normal;
    }
    span, a{
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    }
    .task-created{
        color: #9299b8 !important;
    }
    .task-move{
        svg,
        i{
            width: 16px;
            height: 16px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
        }
    }
    .task-action{
        svg,
        i{
            width: 16px;
            height: 16px;
        }
    }
`,n.Ay.div`
    padding: 25px;
    min-height: 435px;
    .activity-block{
        &:not(:last-child){
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        }
    }
    .activity-dateMeta{
        height: 100%;
        border-radius: 10px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background-light"]}};
        border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        @media only screen and (max-width: 575px) {
            height: auto;
            padding: 30px 0px;
            margin-bottom: 25px;
        }
        h1{
            font-size: 18px;
            margin-bottom: 0px;
        }
        .activity-month{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
    }

    .activity-single{
        &:not(:last-child){
            margin-bottom: 25px;
        }
        .activity-single__figure{
            min-width: 76px;
        }
        .activity-icon{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            margin: ${t=>{let{theme:e}=t;return e.rtl?"4px 0 0 10px":"4px 10px 0 0"}};
            &.bg-primary{
                background: ${t=>{let{theme:e}=t;return e["primary-color"]}}15;
                color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
            }
            &.bg-secondary{
                background: ${t=>{let{theme:e}=t;return e["secondary-color"]}}15;
                color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
            }
            &.bg-success{
                background: ${t=>{let{theme:e}=t;return e["success-color"]}}15;
                color: ${t=>{let{theme:e}=t;return e["success-color"]}};
            }
            svg{
                width: 16px;
                height: 16px;
            }
        }
        img{
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 12px;
        }
        .activity-title{
            font-size: 14px;
            font-weight: 500;
            margin: -4px 0 0;
            span{
                font-weight: 400;
                margin: 0 2px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            }
        }
        .activity-timeMeta{
            font-size: 12px;
            margin-bottom: 0;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
        }
    }
`,n.Ay.div`
    color:#eee;
    &.hexadash-wizard-page{
        padding: 25px 15px;
    }
    &.bordered-wizard{
        padding: 0;
    }
    .steps-action button.btn-next svg {
        ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 10px;
        transform: rotateY(${t=>{let{theme:e}=t;return e.rtl?"180deg":"0deg"}})
    }
    .steps-action button.btn-prev svg {
        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 10px;
        transform: rotateY(${t=>{let{theme:e}=t;return e.rtl?"180deg":"0deg"}})
    }
    .ant-steps-vertical > .ant-steps-item:not(:last-child) > .ant-steps-item-container > .ant-steps-item-tail{
        @media only screen and (max-width: 575px) {
            display: none;
        }
    }
    .ant-steps {
        @media only screen and (max-width: 767px) {
            flex-flow: column;
            align-items: center;
        }
    }
    .ant-steps-item-container{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 50%;
        ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 15px;
        @media only screen and (max-width: 991px) {
            width: 100%;
            ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 0;
        }
        @media only screen and (max-width: 767px) {
            font-size: 15px;
        }
        .ant-steps-item-tail{
            @media only screen and (max-width: 480px) {
                background: #C5CAE1;
                top: 35px !important;
                padding: 20px 0 8px !important;
            }
        }
        .ant-steps-item-content{
            @media only screen and (max-width: 480px) {
                min-height: auto !important;
            }
        }
    }
    .steps-content{
        margin-top: 72px !important;
        @media only screen and (max-width: 1599px) {
            min-height: 252px !important;
        }
        @media only screen and (max-width: 1199px) {
            margin-top: 45px !important;
        }
        @media only screen and (max-width: 575px) {
            margin-top: 30px !important;
        }
    }
    .ant-steps-item-container{
        position: relative;
        &:after{
            position: absolute;
            ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 100%;
            top: 35px;
            color: #333;
            background-image: url(${r(9682)});
            width: 110%;
            height: 6px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-color: transparent !important;
            content: '';
            @media only screen and (max-width: 1399px) {
                width: 120%;
            }
            @media only screen and (max-width: 991px) {
                display: none;
            }
        }
        .ant-steps-item-tail{
            &:after{
                height: 80%;
            }
        }
    }
    .wizard-step-item{
        .ant-steps-item-container{
            &:after{
                background-image: url(${r(9682)});
            }
        }
    }
    .wizard-steps-item-active{
        .ant-steps-item-container{
            &:after{
                background-image: url(${r(3215)});
            }
        }
    }
    .success-step-item,
    .ant-steps-item-finish{
        .ant-steps-item-container{
            &:after{
                background-image: url(${r(2156)});
            }
        }
    }
    .ant-steps-item{
        padding: ${t=>{let{theme:e}=t;return e.rtl?"0 0 0 25px !important":"0 25px 0 0 !important"}} ;
        @media only screen and (max-width: 767px) {
            padding: 0 !important;
            &:not(:last-child){
                margin-bottom: 20px;
            }
        }
        &:last-child{
            ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 15px !important;
            @media only screen and (max-width: 767px) {
                padding: 0 !important;
            }
            .ant-steps-item-container{
                &:after{
                    display: none;
                }
            }
        }
        &:last-child{
            @media only screen and (max-width: 991px) {
                flex: 1 1;
            }
        }
        .ant-steps-item-title{
            font-size: 15px;
            font-weight: 500;
            margin-top: 8px;
            padding: ${t=>{let{theme:e}=t;return e.rtl?"0 10px 0 0":"0 0 0 10px"}};
            
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}}!important;
            @media only screen and (max-width: 1210px) {
                padding: ${t=>{let{theme:e}=t;return e.rtl?"0 20px 0 0":"0 0 0 20px"}};
            }
            @media only screen and (max-width: 767px) {
                padding: 0;
            }
            &:after{
                display: none;
                @media only screen and (max-width: 991px) {
                    display: none;
                }
            }
        }
        .ant-steps-item-icon{
            width: 50px;
            height: 50px;
            line-height: 50px;
            border: 0 none;
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};
            box-shadow: 10px 0 20px ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}}15;
            @media only screen and (max-width: 767px) {
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 0;
                width: 35px;
                height: 35px;
                line-height: 35px;
            }
            .ant-steps-icon{
                font-size: 16px;
                font-weight: 500;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                @media only screen and (max-width: 767px) {
                    font-size: 15px;
                }
            }
        }
        &.ant-steps-item-active{
            .ant-steps-item-icon{
                background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                .ant-steps-icon{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-text"]}};
                }
                svg{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-text"]}};
                }
            }
            .ant-steps-item-title{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}} !important;
            }
            &.ant-steps-item-finish{
                .ant-steps-item-title{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}}; !important;
                }
            }
        }
        &.ant-steps-item-finish{
            .ant-steps-item-icon{
                background: ${t=>{let{theme:e}=t;return e["success-color"]}} !important;
                .ant-steps-icon{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-text"]}};
                }
                .ant-steps-finish-icon{
                    svg{
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-text"]}};
                    }
                }
                
            }
        }
    }
    .basic-form-inner{
        width: 580px;
        @media only screen and (max-width: 575px){
            width: 100%
        }
        .ant-form-item{
            .ant-input-password.ant-input-affix-wrapper{
                background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};
                border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
                ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 0;
            }
        }
        .ant-form-item-label{
            label{
                font-weight: 400;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
            }
        }
        .ant-form-item-control-input{
            .ant-input{
                padding: 12px 20px;
            }
        }
    }
    .steps-action{
        .btn-next{
            &:focus{
                background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
            }
        }
        button.ant-btn-light{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            &:hover{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
            }
        }
    }
    .atbd-form-checkout{
        .ant-input-affix-wrapper-rtl{
            input[type="password"]{
                ${t=>{let{theme:e}=t;return e.rtl?"padding-left":"padding-right"}}: 15px;
            }
        }
       h1{
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 46px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
            @media only screen and (max-width: 991px){
                font-size: 18px;
                margin-bottom: 22px;
            }
            @media only screen and (max-width: 479px){
                font-size: 16px;
            }
       }
       .ant-form-item-label{
           label{
               font-size: 15px;
           }
       }
       input::placeholder{
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
       }
       .input-message{
           margin-top: -6px;
           display: inline-block;
           font-size: 13px;
           color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
       }
       .shipping-selection{
           > .ant-card{
               .ant-card-body{
                    border: 1px solid ${t=>{let{theme:e}=t;return e["border-color-light"]}};
               }
           }
           .ant-card{
               .ant-card{
                   margin-bottom: 0 !important;
               }
           }
           .ant-radio-group {
               .ant-radio-wrapper{
                    display: flex;
                    align-items: flex-start;
                    span + span{
                        width: 100%;
                    }
                   .ant-radio{
                        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 15px;
                    }
               }
           }
           .ant-form-item-control-input-content{
                input{
                    @media only screen and (max-width: 479px) {
                        width: 100% !important;
                        margin-bottom: 6px;
                    }
                }
               .input-leftText{
                   ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 10px;
                   @media only screen and (max-width: 479px) {
                        display: block;
                        ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 0px;
                    }
               }
           }
           .shipping-selection__card{
               .ant-card .ant-card{
                   border: 0 none;
                   border-radius: 20px;
                   box-shadow: 0 10px 30px ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}}10;
               }
               .ant-radio-wrapper{
                    .ant-radio{
                        margin-top: 30px;
                    }
                    span + span{
                        padding: 0;
                    }
               }
               .cvv-wrap{
                   input{
                       max-width: 120px;
                   }
                   .input-leftText{
                       color: ${t=>{let{theme:e}=t;return e["color-info"]}};
                   }
               }
            }
           .shipping-selection__paypal{
               margin-bottom: 20px;
               .ant-radio-wrapper{
                   span + span{
                       display: flex;
                       justify-content: space-between;
                       @media only screen and (max-width: 375px){
                            img{
                                display: none;
                            }
                        }
                   }
               }
           }
           .shipping-selection__paypal,
           .shipping-selection__cash{
                .ant-radio-wrapper{
                    align-items: center;
                    span + span{
                        font-size: 15px;
                        font-weight: 500;
                        padding: 0 25px;
                        display: flex;
                        align-items: center;
                        border-radius: 10px;
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                        border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
                    }
                }
           }
           .supported-card{
               align-items: center;
               justify-content: space-between;
               margin-bottom: 20px;
                @media only screen and (max-width: 479px) {
                    flex-flow: column;
                }
                span{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                }
               .supported-card_logos{
                    @media only screen and (max-width: 479px) {
                        margin-top: 12px;
                    }
                   img + img{
                       ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 15px;
                   }
               }
           }
       }
   }
   .profile-hints{
       p{
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
           font-size: 15px;
           span{
               color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
           }
       }
   }
   .atbd-finish-order{
       max-width: 540px;
       margin: 0 auto;
       padding: 30px;
       min-height: 248px;
       border-radius: 6px;
       border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
       h1,
       h2,
       h3,
       h4,
       h5,
       h6{
            margin-bottom: 16px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
       }
       .ant-checkbox{
           &:hover{
               .ant-checkbox-inner{
                    border-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
               }
           }
       }
       .ant-checkbox-checked{
           &:after{
                border-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
           }
           .ant-checkbox-inner{
                background-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                border-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
           }
       }
       .ant-checkbox-input{
           &:focus + .ant-checkbox-inner{
            border-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
           }
       }
       .checkbox-label{
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 10px;
            font-size: 15px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
       }
   }
   .atbd-review-order{
       > .ant-card{
           > .ant-card-body{
               border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
           }
       }
       h1{
           font-size: 20px;
           font-weight: 500;
           margin-bottom: 45px;
           color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
           @media only screen and (max-width: 479px) {
                font-size: 16px;
                margin-bottom: 25px;
            }
       }
       .atbd-review-order__single{
           .ant-card{
               .ant-card-body{
                   background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background-light"]}};
               }
           }
           .ant-radio-wrapper{
                display: flex;
                align-items: flex-start;
            }
            .ant-card{
                .ant-card-body{
                    padding: 25px !important;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px ${t=>{let{theme:e}=t;return e["gray-solid"]}}10;
                }
            }
            h1{
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 30px;
            }
            .method-info{
                margin-top: -2px;
                font-weight: 500;
                color: color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                img{
                    margin-top: -4px;
                    max-width: 40px;
                }
            }
            .btn-addCard{
                font-weight: 500
                display: inline-block;
                font-size: 13px;
                margin-top: 20px;
                color: ${t=>{let{theme:e}=t;return e["info-color"]}};
            }
            
            .cart-single{
                .cart-single__info{
                    h1{
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                        margin-bottom: 8px;
                    }
                }
            }
       }
        .atbd-review-order__shippingTitle{
            h1{
                display: flex;
                margin-bottom: 30px;
                justify-content: space-between;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                @media only screen and (max-width: 479px) {
                    flex-flow: column;
                }
                a{
                    font-size: 14px;
                    display: inline-flex;
                    align-items: center;
                    @media only screen and (max-width: 479px) {
                        margin-top: 12px;
                    }
                    svg{
                        width: 14px;
                        height: 14px;
                        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 4px;
                    }
                }
            }
        }
        .atbd-review-order__shippingInfo{
            .shipping-info-text{
                margin: -4px 12px 0;
                h1{
                    font-size: 15px;
                    font-weight: 500;
                    margin-bottom: 8px;
                }
                p{
                    font-size: 15px;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                }
            }
            .btn-addNew{
                font-size: 13px;
                font-weight: 500;
                color: ${t=>{let{theme:e}=t;return e["info-color"]}};
            }
        }
   }
   .invoice-summary-inner{
        .summary-total{
            margin-bottom: 0;
        }
   }
   .summary-list{
        margin: 20px 0 10px !important;
        .summary-list-text{
            font-size: 15px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
        li{
            &:not(:last-child){
                margin-bottom: 10px;
            }
        }
   }
   .checkout-successful{
       text-align: center;
        .ant-card {
            box-shadow: 0 10px 30px ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}}10;
            .ant-card{
                padding: 25px;
                    margin-bottom: 0 !important;
            }
        }
        .icon-success{
            width: 34px;
            height: 34px;
            margin: 0 auto 16px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-text"]}};
            background: ${t=>{let{theme:e}=t;return e["success-color"]}};
            svg{
                width: 18px;
            }
        }
        h1{
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 16px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
        }
        p{
            margin-bottom: 0;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
   }
`,n.Ay.div`
    .sDash_datepicker-list{
        .ant-picker.ant-picker-range{
            width: 100%;
        }
    }
    .sDash_editor{
        border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
        border-radius: 4px;
        .EditorToolbar__root___3_Aqz{
            padding: 12px 20px 0;
        }
        .DraftEditor-root{
            min-height: 100px;
            .public-DraftEditorPlaceholder-root{
                padding: 12px 20px 0;
            }
        }
        select{
            margin-top: -4px;
        }
        .Dropdown__value___34Py9{
            &:after,
            &:before{
                ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: auto;
                ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 10px;
            }
        }
    }
    .sDash_slider-list{
        margin: -25px 0;
        .ant-slider{
            margin: 25px 0;
        }
    }
`,n.Ay.div`
    .custom-progress {
    .progress-bg-primary{
        .ant-progress-bg{
            background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
        }
    }
    .progress-bg-info{
        .ant-progress-bg{
            background-color: ${t=>{let{theme:e}=t;return e["info-color"]}};
        }
    }
    .progress-bg-success{
        .ant-progress-bg{
            background-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
        }
    }
    .progress-bg-violet{
        .ant-progress-bg{
            background-color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
        }
    }
    .progress-bg-warning{
        .ant-progress-bg{
            background-color: ${t=>{let{theme:e}=t;return e["warning-color"]}};
        }
    }
    .progress-bg-google{
        .ant-progress-bg{
            background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
        }
    }
    .progress-bg-facebook{
        .ant-progress-bg{
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent].info}};
        }
    }
    .progress-bg-twitter{
        .ant-progress-bg{
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent].success}};
        }
    }
    .progress-bg-linkedin{
        .ant-progress-bg{
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent].secondary}};
        }
    }
    .progress-bg-instagram{
        .ant-progress-bg{
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent].warning}};
        }
    }
    }
  
`,n.Ay.div`
    .hexadash-tassklist-wrap{
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        border-radius: 10px;
        min-height: 220px;
    }
    .hexadash-tasklist-head{
        .hexadash-tasklist-head__title{
            font-size: 16px;
            font-weight: 500;
            padding: 15px 30px;
            margin-bottom: 0;
            border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        }
    }
    .hexadash-tasklist-body{
        .hexadash-tasklist{
            .hexadash-tasklist-item{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 7.5px 0;
                @media only screen and (max-width: 575px){
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 7.5px 0 20px;
                }
                .hexadash-tasklist-item__content{
                    margin-right: 10px;
                }
            }
            .hexadash-tasklist-item__title{
                font-size: 16px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                .ant-checkbox + span{
                    position: relative;
                    top: -2px;
                    ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 10px;
                }
                .ant-checkbox-wrapper{
                    &:hover{
                        .ant-checkbox-inner{
                            border-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                        }
                    }
                    span{
                        font-size: 15px;
                        font-weight: 400;
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                    }
                    .ant-checkbox-input{
                        &:focus + .ant-checkbox-inner{
                            border-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                        }
                    }
                    .ant-checkbox-inner{
                        width: 18px;
                        height: 18px;
                        &:after{
                            width: 5px;
                            height: 9px;
                            top: 48%;
                            left: 25.5%;
                        }
                    }
                    .ant-checkbox-checked{
                        &:after{
                            border-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                        }
                        .ant-checkbox-inner{
                            background-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                            border-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                            &:after{
                                border-color: #fff;
                            }
                        }
                    }
                }
            }
            .hexadash-tasklist-item__text{
                padding-left: 30px;
                p{
                    font-size: 14px;
                    font-weight: 400;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
            .hexadash-tasklist-item__action{
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 20px;
                @media only screen and (max-width: 575px){
                    margin-top: 20px;
                    margin-left: -10px;
                    padding-left: 30px;
                }
                svg,
                i{
                    width: 16px;
                    height: 16px;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
                }
                .task-favourite{
                    line-height: 1;
                    &.active{
                        svg,
                        i{
                            color: ${t=>{let{theme:e}=t;return e["warning-color"]}}; 
                        }
                    }
                    svg,
                    img{
                        position: relative;
                        top: -2px;
                        width: 16px;
                        height: 16px;
                    }
                }
                .ant-dropdown-trigger {
                    line-height: 1;
                }
                .task-favourite{
                    cursor: pointer;
                }
                a {
                    display: inline-flex;
                    align-items: center;
                    margin: 0 10px;
                }
                .hexadash-edit{
                    &:hover{
                        svg,
                        i{
                            color: ${t=>{let{theme:e}=t;return e["info-color"]}}; 
                        }
                    }
                }
                .hexadash-delete{
                    &:hover{
                        svg,
                        i{
                            color: ${t=>{let{theme:e}=t;return e["danger-color"]}}; 
                        } 
                    }
                }
            }
        }
        .hexadash-tasklist-empty{
            min-height: 215px;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                font-size: 18px;
                font-weight: 500;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
            }
        }
    }
    .hexadash-modal-actions{
        display: flex;
        justify-content: flex-end;
        button{
            margin: 5px;
        }
    }
`,n.Ay.div`
    width: ${t=>t.width}; 
    height: ${t=>t.height};
    position: relative;
    .leaflet-container {
        width: ${t=>t.width}; 
        height: ${t=>t.height};
    }
    .leaflet-bar{
        border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}} !important;
        a,
        a:hover{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
            border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        }
        
    }
`},2156:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAAGCAYAAABuOmRxAAAABHNCSVQICAgIfAhkiAAAA59JREFUWEftmF1om1UYx//PeZO0WVNbaZe8eVukMnBDJ1RXYbsQu5slqcx5o04Q58V0eDd3K2IvvXCyS4eC8wPRiGDtNIkf+HGxIhY3L3YxwQ+YSZOsBWvcGpu85/HJrvb2DexJZSCyA7kJz+88J+f8z+H/D2EWBvcktyKKBDjqoN1axdn6JfneQjPycDCSHkfLHwY5EUSwjJWl3/EofA2Ok9L59rG7YK0Loqh8LuLX8nkcQUvFLwq/kroXbMbBFIPxf8FI7QdMKfk8Yhh294AxAVAfiC/gj+qCrH9d1f8r9GPNy4KwwwD9lnEO8UoRe9FU8XnEMZR6CNbsNERxS/73WK19LP3XVPy8twURekT6TxrGFjm0M2jzB9hfuaLi30oNwDVPyGlPGdCANfwNqvYdPFm7rOJLwrM5DObdRCbB4C9A9nVklPzc6CBisWMATxPRIDPmsb7+Cg4sN1T9P791CH7/rNRmCTQk/d+H05wlzI16iPQlApN0xH2gXlNN/GlyGxxnOFBreQW56m8qvuDeB2PcQG1H3PvK51R8MX2/CHo8UNsRd6b2nYr/LLkP7IiorxmWf5L1f63iC6mDBs6OIC7inql8pOPdpwyZnUHeX0Su9p6KL409aywmAzywgFz5lIovpI/JhZoK8vwtskuvqvhS+nli2n1trYjrS+FPqPhC+rgI+oEAzziNXKUj1uuPgvuGXKjMhv55widjd4RoavmYqf98/VmlopTeFapjv41s/Ucd7+0P89ySjSmq+IL3eHj9vC78hyq+lH4mXMd/I1N9U8Obghc6AHk1m3IwL6n4ovfyxjrLvIbc0gsqvjB2MsQTriBbfk7FF713Qzz4suzf0xqeit78xjpm+5c8DOFz6TKh8Ithnhvy+/cq+1dCPHj1xgi73fbx4CXdi1v6DwrbysXIVU9pNvaGCJtE2Jl/IWwWGzNTPqpafzdhs1yMXOWwhu8qbFi5GNWDSr6bsOViLE0r+W7C/vOmFblpRf6nVuRqeBx1ETXxTYfHRHJCwsMgIhEHHX/dqF7sKTze5k5KaBzZdHhcTnc8XnLz4TE5Dd94MBI+O/66UT3TU3hsph4GnIlNh8dB9zHpvc2whEcWf92ozfUUHmN0SKL6dkOIiw1akPCY7yk8bjVHJDjfKbyET/HXdft2T+ER5qic/90EM3DVX5N9rbfwGO3YuV3itRMSHk9LeDzeU3hs950Q7eyR8HiL9Je/M5ov/gOMtOnfGqaapwAAAABJRU5ErkJggg=="},3215:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAAGCAYAAABuOmRxAAAABHNCSVQICAgIfAhkiAAAA99JREFUWEftl1+IVHUUx8/53Xt/M7Ozk7FrsslCC0KK1eY6c9f1IdpeypeiF8kgsAdTelMpqpldupgzY6TVY1ZQUUStBJU++FBQPrisM6OjYGBQGEpZOUu2zjhz7/39Tuc+NePMw28Wogjv4+V8zu/P+f4O54sEnoBNzh2tUA+CZVkxpGuwEPyO4Gkw+Ai2WjBx/2jg2LcDku346iqcOXsZ4YgywIHSO51A3HUPgh5BQEcDXnL0T+ex8nZgxh92AGoblcZRsEBaRD8CDJ/Gyi4zfr0nw6TcTBrGADGGSBfsuj+P33m+0fpjXtwftrYIgeuYj2ulq7KmjuNFr2nEj+5JqDtXPUZA9wJgAgFK1i+/fYmX37hhxKe9AWXJrUSwAYEGeA8nLeUfwYrXMOGvjD+XHJJDT3HtMswmQcO3i/7iRyPnDtZNeBp/Lalj/g4inCKEQQH0lWjJd/Hc82b82ldTYSrcy2ef5vVSAHTUXrJfxwsvLBmtnz6wIhTaI4AtfHcrmPnU1sLD+oS32nLkYHuSSNy4kPvVJHEz/coaYbOo2z7VatUSVe+iCe+7+1wBYqQ9NhK3LOWqJnywsfAAChZ12xeJGyvZBSM+XXyYCzLWsX8Iv0+UZ78x4cNMfhsJWNceiwqrdiX7uRHvFp/morCo//406XKsnPvEhFdu4Vl+FBs67w/m+f7eN+GDycJeXj/TGatPyFMzbxnxmXyOH8RUeyw/sq9lOfumCe9n9h9CEA92xtIxp5zzjHg3/x43xEc6Y3EOm5OFu7sSKKXildkfjBJvKqa74ghDeerFsyZ86O5/9OY4LlTglGaPG/GZ4pPd+wffPvPSZya8nynu7N4/tWQl+4EJH0zmuwtA1HRKMweMeLd4sDuObjil7KwJH7r5w933hw3m95jw/mTh4x7nr/PDeMaED9zC0ZvjkOC6Xc5216VHwiBTKPf4veSUsw8Zrv9z9/nh2j8jbK2Vacf9Twpba1+eNu14vYSNLOzsvyhs4IeR220ijJ7C1rohyzM7TPhewuaOXeeOvc2I7ylsus4de9qIdws9hE1/3hpFbo0i/89RJDKPjQkYsYSVWK55bKXHx4QQKRDCiubrePX8pf7M4ygbHxxernkMqTaFhKuWbR4TsWkivZr3LxXP1/GGOtmPeVQrnccJkc0nxaP52qr5/ZrHJ3j8WhOZx2i+lleuftGPedRCbtdAa9k8Jdjxzzs6mOvHPA7Hh3aR1uv5/AMA+sRi848P+zGPofR3E+B9iJCM5mvHd97pxzwGqcDj2vNIi+z16Bibx0P9mMdAqGie38w5buMcc7bGl/8COk1JXdqySn8AAAAASUVORK5CYII="},4612:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAABHNCSVQICAgIfAhkiAAAAI5JREFUKFNjZCAAWnvXPgAqaaguDl6ArJSRCI0JjIyM8////5+IrJmgRpDBQFsxNBOlEZtmxvb+9QpAZ8gTcjJI/t+/fx5MTEwV//7/LWVs6137gYGRkZ8YjXA1QJuIdircuQwME/4zMTkQrREcQFBN1YWBF4jSiK4JZDtBjdg0Eaexb90GYOA1gJyHHIAA1A5J7ZJgTLkAAAAASUVORK5CYII="},4666:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAABHNCSVQICAgIfAhkiAAAAIxJREFUKFNjZEADrb1rE4BCDdXFwQrocsh8RmQOSBMjI+P8////JwI1LiBKIymaQAaCbSRVE1hjS+/qEiZG5u5///51MDEx7cDnPJgc0DsPGYG2/QcyiFEPVwMMA6DG/vUGjP/+HfjPwFBAKEAwQpUczXA3kqoZNR5JcDZGqIBsZvj/v6G6KCgAX4gBAOjbUJDsLDdkAAAAAElFTkSuQmCC"},9682:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAAGCAYAAABuOmRxAAAABHNCSVQICAgIfAhkiAAABBdJREFUWEftl01sG0UUx9+b9fojthPTqGnUOrGtojYioETU8bchliqSSxEXQpGQ4FCouJVeEcJHDhT1SAUSIBACIyQgPaSCqIU4TuIsKJGIBBWFeB0QEAL5sh1/7DzGHEoSG2mcSyXUkfay+v9mdt/8d/b9MZkkNjr6+2HDVHZwgykqqRsTE12rySRykBipVEo5dm/MzavcBWSYmFn94+cf0itjY2OGBA5XNE09wTv7TQDdAEytAc/fZGtL5/3+qgyvaaRWYeVBTuBGIDMi/qiC+xu/H6X4paUl80ahPYzEvYRgEc/wfYd9c6a/v78is/716z9ZlTYYRYI+hsxqAF8wijCRSPh2ZPhMJm/jJnoUAe4XehsBzLMafhaJ9JRk+HFNa7vHOPw4IAyKOdqIIPOXsvrRGb+/KMNfu7Zod7pcTxGQX+jtCPjl1vr6eyMjAwUZfnHxV3uhXD5HiCEgcohn+MJusbw5MNAtxafT3znRYruIRMMA6BR7ME7l0muxWN+WzPqfa7c67NyUFHUbFfoOsf6HBVZLYjqtHyWVOXZPUjd3KHTkN5mJJ6f142aFXLu1NeJribBvWYa/kdWHFCBh6n8HE+aOBnwLMnz6az3OOLh3a+vmDvt75mT4aU1/BDl5d2sNg9+Mh303pPhZ/Swg9e1ZH3AhEuz9RIrP6s8IXd3Ut4fBDe2hkO8DSf55ABrcq+Uzon5vS/FzyxeFrm7q20OY/KtY0Pe6FD+vvygMHdrDI0zGhjyX5fjlS0j48B6e4Go06ElK8bO5t4DByD5tCqfmVk7sn4Ap3Ij6e2/JTDw1mzvVoEOlFg+6F6X4bO5Mo45X4wHfhAyfmdef3K8jwEp0qOdjKT6be26/Tpy+5XDQ844MPz2Xa9gATnwnHvK9IsVn9Veb6ErRQO9LcnzuSuP7QzEW8Lwgxc8tv99EV4gGvc9K8dnceOP+43Z0qLdhX5rNl8nmtMb7tBUJeBOS6//SRLfxH8ZWhbGPHNjYNXHkJKJyJ+5UU2MzYeyeO2ZsAl6RP/EajY0IO5GA544ZGziUoiHPBSljNDG2+K0XY0HvOSm+ibEFXxAf1lkZvpmxxR9jOxrwDsvw09lcM2Nv3m1F7rYi/89WpB4eT5/Od6PVYuNG9UDhsfNYyMvAcJoUptT769X8fL6V8HiSdw0qgJ0AXK3319+2GB53MB9Cjl0HDY/rJecwcOMoAjPX++tD7cVMK+HRbFMeQ0ZeEdysInwtlItGS+GRTPSEOJ2Oi8tW769N3PRpK+HxEO96GjidFL2mTdRw5k+2lmolPDpcHefFKXvfP+FT9NeF9c13WwmP25XKBSJ6QPB2Ef4mnWbLG62FR2sSCE6J2jlEDa9StXSplfDYVjNdFu8eFvVrF1eqyGov/w3y20+a/aZBxgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=925.e7d12014.chunk.js.map