package damian.tab.bankreality.database.model;

import lombok.Data;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;

@MappedSuperclass
@SuppressWarnings("serial")
@Data
//@Entity
public class BaseModel implements Serializable {

    @EmbeddedId
    PrimaryKey key;
}
