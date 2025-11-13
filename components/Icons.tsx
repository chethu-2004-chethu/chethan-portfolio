import React from 'react';

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "1em",
  height: "1em",
};

export const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M14.25 7.46c.07-.1.17-.18.29-.22.12-.04.25-.06.39-.06.29 0 .56.09.79.27s.35.43.35.74v.21l-2.11 6.55 2.11 6.55c0 .31-.12.55-.35.74s-.5.28-.79.28c-.14 0-.27-.02-.39-.06s-.22-.12-.29-.22l-4.11-6.29-4.11-6.29c-.07-.1-.12-.2-.15-.31s-.05-.23-.05-.35.02-.24.05-.35.08-.21.15-.31l4.11-6.29 4.11-6.29zM12 10.87l-2.11-3.26-2.11-3.26h4.22v6.52zm0 2.26v6.52h4.22l-2.11-3.26-2.11-3.26z" />
  </svg>
);

export const JavaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M4 11V8h2.532c.88 0 1.58.26 2.104.781.523.52.785 1.211.785 2.073v.292c0 .862-.262 1.553-.785 2.074-.523.52-1.223.781-2.104.781H4zm2 2.75h.532c.428 0 .78-.124 1.055-.371.275-.248.413-.61.413-1.085v-.292c0-.475-.138-.837-.413-1.085-.275-.247-.627-.37-1.055-.37H6zM15.405 13.042c.54 0 .984-.158 1.332-.475.348-.316.522-.736.522-1.258v-.219c0-.521-.174-.941-.522-1.258-.348-.316-.792-.475-1.332-.475-.54 0-.984.159-1.332.475-.348.317-.522.737-.522 1.258v.219c0 .522.174.942.522 1.258.348.317.792.475 1.332.475zm-3.13 5.708v-5h-1.4V8h6.13v1.75h-3.33v3h2.232c.983 0 1.777.288 2.383.863.606.576.909 1.372.909 2.39v.218c0 1.017-.303 1.813-.909 2.389-.606.576-1.4.864-2.383.864H10.875V17h1.4z" />
  </svg>
);

export const JavaScriptIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M0 0h24v24H0V0h0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 18H8V9.5h1.5V18zm6-4.5h-1.25l-.75 2h-1.5L14 9.5h1.5l2 8.5H16l-.5-2z" />
    <path d="M14.5 12.25L13.5 15h-1l-1-2.75h2z" />
  </svg>
);

export const SQLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}><path d="M15 22H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-4-1.5a.5.5 0 0 0 0-1 .5.5 0 0 0 0 1zM4 17h3v-2H4v2zm0-4h3v-2H4v2zm0-4h3V7H4v2zm0-4h3V3H4v2z"/></svg>
);

export const ReactIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.29-3.47c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l3 3c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-3-3zm3-11.06c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l3 3c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-3-3z" />
    <ellipse cx="12" cy="12" rx="4" ry="4" />
  </svg>
);

export const NextjsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.12 15.12L6 12l4.88-5.12V10h4.24v2H10.88v5.12z" />
  </svg>
);

export const NodejsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M20.29 11l-3.29-3.29-1.41 1.41L18.17 12l-2.58 2.58 1.41 1.41L20.29 13H12v-2h8.29zM3.71 13l3.29 3.29 1.41-1.41L5.83 12l2.58-2.58-1.41-1.41L3.71 11H12v2H3.71z" />
  </svg>
);

export const HTMLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M12 2L3 4.5v15L12 22l9-2.5v-15L12 2zm-1 15.5V14h-3v-2h3V9.5h2V12h3v2h-3v3.5h-2z" />
  </svg>
);

export const CSSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  </svg>
);

export const BootstrapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.5 13.5h-3v-1h3v1zm-1-3h-1v-5h1v5z" />
  </svg>
);

export const MySQLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v8h-2v-8zm-4 4h2v4h-2v-4z"/></svg>
);

export const OracleSQLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-4v-2h2v2h-2zm0-4V7h2v2h-2z"/></svg>
);

export const PostmanIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 3c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 3c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
);

export const GitIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M21.71 11.29l-9-9a1 1 0 00-1.42 0l-9 9a1 1 0 000 1.42l9 9a1 1 0 001.42 0l9-9a1 1 0 000-1.42zM12 18.59L5.41 12 12 5.41 18.59 12 12 18.59zM16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12a10 10 0 007.09 9.5c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

export const AWSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
);

export const LinuxIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5c-3.03 0-5.5-2.47-5.5-5.5S6.97 5.5 10 5.5v9z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10V2z"/></svg>
);

export const AgileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-11h2v6h-2v-6zm0-4h2v2h-2V5z"/></svg>
);

export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

export const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
  </svg>
);

export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
  </svg>
);

export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
  </svg>
);

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 6H5v7h3V9zm-1.5-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16 9h-2.5a2.5 2.5 0 0 0-2.5 2.5V16h3v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V16h3v-4.93A2.07 2.07 0 0 0 16 9z"/></svg>
);

export const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
);

export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2z"/></svg>
);
