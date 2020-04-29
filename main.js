document.body.append(
  FueJs.createElement(
    'div', // background
    {
      style: {
        width: '100%',
        height: '100vh',
        background: 'url(./1.JPG)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      className: 'root',
    },
    [
      FueJs.createElement(
        'div', // contrainer
        {
          style: {
            width: '40%',
            height: '70vh',
            background: 'rgba(213,213,225,0.8)',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          className: 'container',
        },
        FueJs.createElement(
          'form',
          {
            style: {
              width: '80%',
              height: '90%',
              background: 'rgba(31,31,225,0.5)',
              borderRadius: '30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
            className: 'form',
          },
          [
            FueJs.createElement('input', {
              type: 'email',
              placeHolder: 'email',
              style: {
                width: '80%',
                height: '30px',
                margin: '20px 0',
              },
            }),
            FueJs.createElement('input', {
              type: 'password',
              placeHolder: 'password',
              style: {
                width: '80%',
                height: '30px',
                margin: '20px 0',
              },
            }),
            FueJs.createElement('input', {
              type: 'button',
              value: 'log in',
              style: {
                width: '80%',
                height: '30px',
                borderRadius: '10px',
              },
            }),
            FueJs.createElement(
              'div', // contrainer ckeck box
              {
                style: {
                  width: '80%',
                  height: '10%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                },
                className: 'checkBox',
              },
              [
                FueJs.createElement(
                  'span',
                  {
                    style: {
                      color: 'black',
                    },
                  },
                  'remember me'
                ),
                FueJs.createElement('input', { type: 'checkBox' }),
              ]
            ),
          ]
        )
      ),
    ]
  )
);
