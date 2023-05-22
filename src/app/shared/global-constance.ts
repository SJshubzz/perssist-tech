export class GlobalConstants {
  public static genericError: string =
    "Something wen't wrong . Please try again letter";

  public static unAuthorized: string =
    'You are not Authorized person to access this page .';

  public static productExistError: string = 'product alrady exist !';

  public static productAdded: string = 'Product sucssesfully added.';

  public static nameRegex: string = '[a-zA-Z0-9 ]*';

  public static emailRegex: string =
    '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';

  public static contactRegex: string = '^[e0-9]{10,10}$';

  public static error: string = 'error';
}
