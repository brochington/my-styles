import React from 'react'

class CodePage extends React.Component {
    render() {
        return (
            <div className="column justify-around flex-wrap mt2">
              <div>
                  <div className="codeblock-label">This is a code label:</div>
                  <pre className="codeblock line-numbers">
                    <code>
                      {`It would be nice to add line numbers here.\nYeah.\n`}
                    </code>
                  </pre>
              </div>
              <div>
                <blockquote>
                  <div>This is a blockquote.</div>
                  <div>Put a bird on it activated charcoal truffaut gluten-free. Deep v etsy ennui, pitchfork letterpress fixie wayfarers viral umami chillwave pok pok. Yr tumeric 3 wolf moon ugh franzen. Kombucha single-origin coffee pinterest gluten-free banh mi, semiotics normcore franzen photo booth cornhole hella.</div>
                </blockquote>
              </div>
            </div>
        )
    }
}

export default CodePage;
