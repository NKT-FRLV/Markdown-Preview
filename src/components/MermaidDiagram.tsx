import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      // Initialize mermaid with configuration
      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
        fontSize: 16,
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: 'basis',
        },
        sequence: {
          useMaxWidth: true,
          diagramMarginX: 50,
          diagramMarginY: 10,
          actorMargin: 50,
          width: 150,
          height: 65,
          boxMargin: 10,
          boxTextMargin: 5,
          noteMargin: 10,
          messageMargin: 35,
          mirrorActors: true,
          bottomMarginAdj: 1,
          rightAngles: false,
          showSequenceNumbers: false,
        },
        gantt: {
          useMaxWidth: true,
          leftPadding: 75,
          gridLineStartPadding: 35,
          fontSize: 11,
          numberSectionStyles: 4,
          axisFormat: '%Y-%m-%d',
        },
      });

      // Generate unique ID for the diagram
      const id = `mermaid-diagram-${Math.random().toString(36).substr(2, 9)}`;
      
      // Clear previous content
      ref.current.innerHTML = '';
      
      // Create a div for the diagram
      const diagramDiv = document.createElement('div');
      diagramDiv.id = id;
      diagramDiv.innerHTML = chart;
      ref.current.appendChild(diagramDiv);

      // Render the diagram
      mermaid.render(id, chart)
        .then(({ svg }) => {
          if (ref.current) {
            ref.current.innerHTML = svg;
          }
        })
        .catch((error) => {
          console.error('Error rendering mermaid diagram:', error);
          if (ref.current) {
            ref.current.innerHTML = `
              <div style="
			  	overflow: auto;
                padding: 0.25rem;
                background: #fee2e2;
                border: 1px solid #fecaca;
                border-radius: 0.5rem;
                color: #dc2626;
                font-family: monospace;
                font-size: 0.875rem;
              ">
                <strong>Mermaid Error:</strong><br/>
                ${error.message || 'Failed to render diagram'}
              </div>
            `;
          }
        });
    }
  }, [chart]);

  return (
    <div 
      ref={ref}
      className="mermaid-diagram"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.25rem',
        backgroundColor: '#f8fafc',
        borderRadius: '0.5rem',
        border: '1px solid #e2e8f0',
        overflow: 'auto',
      }}
    />
  );
};

export default MermaidDiagram; 