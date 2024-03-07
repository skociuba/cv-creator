import React from 'react';

type Props = {
  header?: () => React.ReactNode;
  body?: () => React.ReactNode;
  footer?: () => React.ReactNode;
};

const Wizard: React.FC<Props> = ({header, body, footer, ...props}) => (
  <div {...props} className="flex h-[500px] flex-col justify-between">
    <div>
      <div>{header && header()}</div>
      <div>{body && body()}</div>
    </div>
    <div>{footer && footer()}</div>
  </div>
);
export default Wizard;
