namespace NERP.Common.Models
{
    public class CustomField
    {
        public string Category { get; set; }
        public string Label { get; set; }
        public ControlType ControlType { get; set; }
        public DataType DataType { get; set; }
        public string Values { get; set; }
        public object UserValue { get; set; }
    }

    public enum ControlType
    {
        TextBox = 1,
        Dropdown = 2,
        Date = 3,
        Radio = 4,
        Checkbox = 5
    }

    public enum DataType
    {
        String = 1,
        Number = 2,
        Boolean = 3,
        Date = 4
    }
}
