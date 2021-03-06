/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */
let sqlString = [];

function toString(ast) {
  sqlString = [];
  TypeToValue(ast);
  return sqlString.join("");
}

function TypeToValue(value) {
  if (value.spacing) {
    value.spacing.map((spacing) => {
      sqlString.push(spacing);
    })

  }
  switch(value.type){
    case 'expressionOnly':
      TypeToValue(value.expression);
      value.endSpacing.map((spacing) => {
        sqlString.push(spacing);
      });
      break;
    case 'query':
      sqlString.push(value.syntax);
      value.selectParts.map((selectpart) => {
        TypeToValue(selectpart);
      })
      TypeToValue(value.from);
      if(value.where) {
        TypeToValue(value.where);
      }
      if(value.groupby) {
      TypeToValue(value.groupby);
      }
      if(value.having) {
        TypeToValue(value.having);
      }
      if(value.orderBy) {
        TypeToValue(value.orderBy);
      }
      if(value.limit) {
        TypeToValue(value.limit);
      }
      if(value.unionAll) {
        TypeToValue(value.limit);
      }
      value.endSpacing.map((spacing) => {
        sqlString.push(spacing);
      });
    break;
    case 'where':
      sqlString.push(value.syntax);
      TypeToValue(value.expr);
      break;
    case 'having':
      sqlString.push(value.syntax);
      TypeToValue(value.expr);
      break;
    case 'innerJoin':
      sqlString.push(value.syntax);
      TypeToValue(value.expr);
      break;
    case 'limit':
      sqlString.push(value.syntax);
      TypeToValue(value.value);
      break;
    case 'orderBy':
      sqlString.push(value.syntax);
      value.orderByParts.map((orderByPart, index) => {
        TypeToValue(orderByPart);
      })
      break;
    case 'selectPart':
      if(value.paren) {
        sqlString.push('(')
      }
      if(value.distinct) {
        TypeToValue(value.distinct)
      }
      TypeToValue(value.expr);
      if(value.alias){
        TypeToValue(value.alias);
      }
      if(value.paren) {
        sqlString.push(')')
      }
      break;
    case 'variable':

      sqlString.push(value.quote + value.value + value.quote);
      break;
    case 'Constant':
      sqlString.push(value.value);
      break;
    case 'star':
      sqlString.push("*");
      break;
    case 'function':
      sqlString.push(value.functionCall + "(");
      value.arguments.map((argument, index) => {
        TypeToValue(argument);
      })
      sqlString.push(")");
      break;
    case 'from':
      sqlString.push(value.syntax);
      TypeToValue(value.value);
      break;
    case 'table':
      if(value.table.type) {
        TypeToValue(value.table);
      } else {
        sqlString.push( value.schema ? value.schema + "." + value.table : value.table) ;
      }
      break;
    case 'argument':
      if(value.distinct) {
        TypeToValue(value.distinct)
      }
      TypeToValue(value.argumentValue);
      break;
    case 'argumentValue':
      if(value.argument.type) {
        TypeToValue(value.argument);
      } else {
        sqlString.push(value.argument);
      }
      break;
    case 'distinct' :
      sqlString.push(value.distinct);
    break;
    case 'groupBy':
      sqlString.push(value.syntax);
      value.groupByParts.map((groupByPart, index) => {
        TypeToValue(groupByPart);
      })
      break;
    case 'orderByPart':
      value.expr.map((expr, index) => {
        TypeToValue(expr);
      })
      if(value.direction) {
        TypeToValue(value.direction);
      }
      break;
    case 'direction':
      sqlString.push(value.direction);
      break;
    case 'exprPart':
      TypeToValue(value.value);
      break;
    case 'Integer':
      sqlString.push(value.value);
      break;
    case 'Interval':
      sqlString.push(value.value);
      break;
    case 'binaryExpression':
      TypeToValue(value.lhs);
      TypeToValue(value.operator);
      TypeToValue(value.rhs);
      break;
    case 'expression':
      TypeToValue(value.lhs);
      TypeToValue(value.operator);
      TypeToValue(value.rhs);
      break;
    case 'operator':
      sqlString.push(value.operator);
      break;
    case 'timestamp':
      sqlString.push("TIMESTAMP " + "'" + value.value + "'");
      break;
    case 'case':
      sqlString.push(value.syntax);
      if(value.caseValue) {
        TypeToValue(value.caseValue);
      }
      value.when.map((when, index) => {
        TypeToValue(when);
      })
      if(value.elseValue) {
        TypeToValue(value.elseValue);
      }
      TypeToValue(value.end);
      break;
    case 'caseValue':
      TypeToValue(value.caseValue);
      break;
    case 'when':
      sqlString.push(value.syntax);
      TypeToValue(value.when);
      TypeToValue(value.then);
      break;
    case 'elseValue':
      sqlString.push(value.syntax);
      TypeToValue(value.elseValue);
      break;
    case 'end':
      sqlString.push(value.syntax);
      break;
    case 'alias':
      sqlString.push(value.syntax);
      TypeToValue(value.value);
      break;
    case 'then':
      sqlString.push(value.syntax);
      TypeToValue(value.then);
      break;
  }

}

module.exports = {
  toSQL: toString
};
