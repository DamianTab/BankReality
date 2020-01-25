package damian.tab.bankreality.database.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Persistent;

import javax.persistence.*;
import java.io.Serializable;

@MappedSuperclass
@SuppressWarnings("serial")
@Data
public abstract class BaseModel implements Serializable {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Basic(optional = false)
//    @Column(name = "id", nullable = false, columnDefinition = "BIGINT")
//    private long id;

    @EmbeddedId
    PrimaryKey key;
}
