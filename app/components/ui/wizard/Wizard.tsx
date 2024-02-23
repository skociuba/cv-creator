import React from 'react';

type Props = {
  header?: () => React.ReactNode;
  body?: () => React.ReactNode;
  footer?: () => React.ReactNode;
};

const Wizard: React.FC<Props> = ({header, body, footer, ...props}) => (
  <div {...props}>
    <p>{header && header()}</p>
    <p>{body && body()}</p>
    <p>{footer && footer()}</p>
  </div>
);
export default Wizard;
