import React, { PropTypes } from 'react';
import Row from './Row';
import Columns from './Columns';

/**
 * Renders the row, column layout based on the layout provided to the dashboard.
 */
const LayoutRenderer = ({layout, widgets, onRemove, editable, onAdd, frame, rowClass, onMove, editableColumnClass, droppableColumnClass, addWidgetButtonText, addWidgetComponent}) => {
  let rows = layout.rows.map((row, rowIndex) => {
    return (
      <Row rowClass={rowClass}>
      <Columns
        columns={row.columns}
        widgets={widgets}
        onRemove={onRemove}
        layout={layout}
        rowIndex={rowIndex}
        editable={editable}
        onAdd={onAdd}
        onMove={onMove}
        frame={frame}
        editableColumnClass={editableColumnClass}
        droppableColumnClass={droppableColumnClass}
        addWidgetButtonText={addWidgetButtonText}
        addWidgetComponent={addWidgetComponent}
        />
      </Row>
    );
  });

  return (
    <div>
      {rows}
    </div>
  );
};

LayoutRenderer.propTypes = {
  /**
   * Layout of the dashboard.
   */
  layout: PropTypes.object,

  /**
   * Widgets that the dashboard supports.
   */
  widgets: PropTypes.object,

  /**
   * Indicates weather this dashboard is in editable mode.
   */
  editable: PropTypes.bool,

  /**
   * Function that will be called when user removed a widget.
   */
  onRemove: PropTypes.func,

  /**
   * Function that will be called user tries to add a widget.
   */
  onAdd: PropTypes.func,

  /**
   * Frame that should be used as the outer cotnainer of the widget.
   */
  frame: PropTypes.func,

  /**
   * Class name that should be provided to the row component.
   */
  rowClass: PropTypes.string,

  /**
   * Function to be called when a widget is moved by the user.
   */
  onMove: PropTypes.func,

  /**
   * Class to be used for columns in editable mode.
   */
  editableColumnClass: PropTypes.string,

  /**
   * CSS class to be used for columns when a widget is droppable.
   */
  droppableColumnClass: PropTypes.string,

  addWidgetButtonText: PropTypes.string,

  addWidgetComponent: PropTypes.func,
};

LayoutRenderer.defaultProps = {
  /**
   * Default layout.
   */
  layout: {
    rows: [],
  },
};

export default LayoutRenderer;