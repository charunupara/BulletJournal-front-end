import React from 'react';

const Logs = ({ logs }) => {
    return (
        <div>
          <h1>Today's Log</h1>
          {logs.map((log) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{log.title}</h5>
                <h6 className="card-subtitle mb2 text-muted">{log.category}</h6>
              </div>
            </div>
          ))}
        </div>
    )
};

export default Logs;