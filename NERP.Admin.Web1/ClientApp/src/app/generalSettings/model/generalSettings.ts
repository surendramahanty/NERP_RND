import { DbBaseEntity } from '../../common/models/dbBaseEntity';

export class GeneralSettings extends DbBaseEntity{
   
   //boundaryHierarchies: BoundaryHierarchy[];
   //constructionStages: ConstructionStage[];
   //activationStages: ActivationStage[];
   //accessibilities: Accessibility[]
   //hierarchyTypes: HierarchyType[];
   //opticalLinkBudget: OpticalLinkBudget[];
   //ofcUtilization: OFCUtilization[];

   fileAttachmentLimit: number = 5;
}

//export class ConstructionStage {
//   name: string;
//   colorCode: string;
//}
//export class OFCUtilization {
//   name: string;
//   colorCode: string;
//}

//export class ActivationStage {
//   name: string;
//   colorCode: string;
//}

//export class Accessibility {
//   name: string;
//   colorCode: string;
//}

//export class HierarchyType {
//   name: string;
//   colorCode: string;
//}

//export class BoundaryHierarchy {
//   name: string;
//   colorCode: string;
//}
//export class OpticalLinkBudget {
//   waveLengthName: string;
//   cablelengthLoss: string;
//   spliceLoss: string;
//   patchingLoss: string;
//   patchConnectorLoss: string;

//}
