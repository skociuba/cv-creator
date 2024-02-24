import React from 'react';

type Props = {
  header?: () => React.ReactNode;
  body?: () => React.ReactNode;
  footer?: () => React.ReactNode;
};

const Wizard: React.FC<Props> = ({header, body, footer, ...props}) => (
  <div {...props} className="flex h-[600px] flex-col justify-between">
    <div>
      <p>{header && header()}</p>
      <p>{body && body()}</p>
    </div>
    <p>{footer && footer()}</p>
  </div>
);
export default Wizard;
