// Type definitions for ESTree AST extensions for Facebook Flow
// Project: https://github.com/estree/estree
// Definitions by: RReverser <https://github.com/RReverser>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./estree.d.ts" />

declare module ESTree {
  interface FlowTypeAnnotation extends Node {}

  interface FlowBaseTypeAnnotation extends FlowTypeAnnotation {}

  interface FlowLiteralTypeAnnotation extends FlowTypeAnnotation, Literal {}

  interface FlowDeclaration extends Declaration {}

  interface AnyTypeAnnotation extends FlowBaseTypeAnnotation {}

  interface ArrayTypeAnnotation extends FlowTypeAnnotation {
    elementType: FlowTypeAnnotation;
  }

  interface BooleanLiteralTypeAnnotation extends FlowLiteralTypeAnnotation {}

  interface BooleanTypeAnnotation extends FlowBaseTypeAnnotation {}

  interface ClassImplements extends Node {
    id: Identifier;
    typeParameters?: TypeParameterInstantiation;
  }

  interface ClassProperty {
    key: Expression;
    value?: Expression;
    typeAnnotation?: TypeAnnotation;
    computed: boolean;
    static: boolean;
  }

  interface DeclareClass extends FlowDeclaration {
    id: Identifier;
    typeParameters?: TypeParameterDeclaration;
    body: ObjectTypeAnnotation;
    extends: Array<InterfaceExtends>;
  }

  interface DeclareFunction extends FlowDeclaration {
    id: Identifier;
  }

  interface DeclareModule extends FlowDeclaration {
    id: Literal | Identifier;
    body: BlockStatement;
  }

  interface DeclareVariable extends FlowDeclaration {
    id: Identifier;
  }

  interface FunctionTypeAnnotation extends FlowTypeAnnotation {
    params: Array<FunctionTypeParam>;
    returnType: FlowTypeAnnotation;
    rest?: FunctionTypeParam;
    typeParameters?: TypeParameterDeclaration;
  }

  interface FunctionTypeParam {
    name: Identifier;
    typeAnnotation: FlowTypeAnnotation;
    optional: boolean;
  }

  interface GenericTypeAnnotation extends FlowTypeAnnotation {
    id: Identifier | QualifiedTypeIdentifier;
    typeParameters?: TypeParameterInstantiation;
  }

  interface InterfaceExtends extends Node {
    id: Identifier | QualifiedTypeIdentifier;
    typeParameters?: TypeParameterInstantiation;
  }

  interface InterfaceDeclaration extends FlowDeclaration {
    id: Identifier;
    typeParameters?: TypeParameterDeclaration;
    extends: Array<InterfaceExtends>;
    body: ObjectTypeAnnotation;
  }

  interface IntersectionTypeAnnotation extends FlowTypeAnnotation {
    types: Array<FlowTypeAnnotation>;
  }

  interface MixedTypeAnnotation extends FlowBaseTypeAnnotation {}

  interface NullableTypeAnnotation extends FlowTypeAnnotation {
    typeAnnotation: TypeAnnotation;
  }

  interface NumberLiteralTypeAnnotation extends FlowLiteralTypeAnnotation {}

  interface NumberTypeAnnotation extends FlowBaseTypeAnnotation {}

  interface StringLiteralTypeAnnotation extends FlowLiteralTypeAnnotation {}

  interface StringTypeAnnotation extends FlowBaseTypeAnnotation {}

  interface TupleTypeAnnotation extends FlowTypeAnnotation {
    types: Array<FlowTypeAnnotation>;
  }

  interface TypeofTypeAnnotation extends FlowTypeAnnotation {
    argument: FlowTypeAnnotation;
  }

  interface TypeAlias extends FlowDeclaration {
    id: Identifier;
    typeParameters?: TypeParameterDeclaration;
    right: FlowTypeAnnotation;
  }

  interface TypeAnnotation extends Node {
    typeAnnotation: FlowTypeAnnotation;
  }

  interface TypeCastExpression extends Expression {
    expression: Expression;
    typeAnnotation: TypeAnnotation;
  }

  interface TypeParameterDeclaration extends Node {
    params: Array<Identifier>;
  }

  interface TypeParameterInstantiation extends Node {
    params: Array<FlowTypeAnnotation>;
  }

  interface ObjectTypeAnnotation extends FlowTypeAnnotation {
    properties: Array<ObjectTypeProperty>;
    indexers: Array<ObjectTypeIndexer>;
    callProperties: Array<ObjectTypeCallProperty>;
  }

  interface ObjectTypeCallProperty extends Node {
    value: FunctionTypeAnnotation;
    static: boolean;
  }

  interface ObjectTypeIndexer extends Node {
    id: Identifier;
    key: FlowTypeAnnotation;
    value: FlowTypeAnnotation;
    static: boolean;
  }

  interface ObjectTypeProperty extends Node {
    key: Expression;
    value: FlowTypeAnnotation;
    optional: boolean;
    static: boolean;
  }

  interface QualifiedTypeIdentifier extends Node {
    qualification: Identifier | QualifiedTypeIdentifier;
    id: Identifier;
  }

  interface UnionTypeAnnotation extends FlowTypeAnnotation {
    types: Array<FlowTypeAnnotation>;
  }

  interface VoidTypeAnnotation extends FlowBaseTypeAnnotation {}
}
