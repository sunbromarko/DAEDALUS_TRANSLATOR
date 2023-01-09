import { ZenListener } from "./grammar/ZenListener";
import { AttrContext, BlockContext, BlockNameContext, ClassPathContext, HeadContext, MainContext } from "./grammar/ZenParser";

export class ZenToJsonListener implements ZenListener {
  _json: any = {};
  _currentBlock: any = {};
  _currentAttr: any = {};

  enterMain(ctx: MainContext): void {}

  exitMain(ctx: MainContext): void {}

  // enterHead(ctx: HeadContext): void {}

  // exitHead(ctx: HeadContext): void {}

  // enterBlock(ctx: BlockContext): void {}

  // exitBlock(ctx: BlockContext): void {}

  // enterBlockName(ctx: BlockNameContext): void {}

  // exitBlockName(ctx: BlockNameContext): void {}

  // enterClassPath(ctx: ClassPathContext): void {}

  // exitClassPath(ctx: ClassPathContext): void {}

  // enterAttr(ctx: AttrContext): void {}

  // exitAttr(ctx: AttrContext): void {}
}
