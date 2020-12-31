import { Cast, castToNumber, castToString, JsonEntityModel } from '@abstractFlo/shared';

export class KeyEventModel extends JsonEntityModel {

  @Cast({ from: castToString() })
  target: string;

  @Cast({ from: castToString() })
  methodName: string;

  @Cast({ from: castToString() })
  type: 'keyup' | 'keydown';

  @Cast({ from: castToNumber() })
  key: number;
}
